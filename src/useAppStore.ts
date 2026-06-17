import { create } from "zustand";
import { persist } from "zustand/middleware";
import { QuizInput, ScoreCard } from "./components/QuizContent";
import { questionContent } from "./question-content";
import { track } from "@amplitude/analytics-browser";

/**
 * A blank template to keep track of user's
 * responses to quiz questions.
 */
export const createBlankAnswersList = () => {
  return Object.entries(questionContent).map((question, i) => ({
    questionNumber: i + 1,
    answer: null,
  }));
};

type AppState = {
  version: number;
  favoriteTopics: string[];
  setFavoriteTopics: (favoriteTopics: string[]) => void;
  answers: QuizInput[];
  setAnswers: (answers: QuizInput[]) => void;
  score: ScoreCard | null;
  setScore: (score: ScoreCard) => void;
  /**
   * This state is used to keep track of the number of the last question
   * that was visible to the user.
   */
  highestVisibleQuestion: number;
  setHighestVisibleQuestion: (highestVisibleQuestion: number) => void;
  resetAnswers: () => void;
};

/**
 * The current version of the app.
 * This is used to migrate the app state when the app is updated, like when
 * a candidate changes their answer to a quiz question.
 *
 * Note: incrementing this number will trigger a migration of the app state,
 * which essentially resets the quiz answers and other state to their defaults
 * for every user.
 */
const CURRENT_APP_VERSION = 1;

/**
 * Factory to create a city-specific store.
 * Ensures persistence and migration are scoped separately for each city.
 */
function createAppStore() {
  const cityVersion = CURRENT_APP_VERSION;
  const blankAnswersList = createBlankAnswersList();
  return create<AppState>()(
    persist<AppState>(
      (set) => ({
        version: cityVersion,
        favoriteTopics: [],
        setFavoriteTopics: (favoriteTopics) => set({ favoriteTopics }),
        answers: blankAnswersList,
        setAnswers: (answers) => set({ answers }),
        score: null,
        setScore: (score) => set({ score }),
        highestVisibleQuestion: 1,
        setHighestVisibleQuestion: (highestVisibleQuestion) =>
          set({ highestVisibleQuestion }),
        resetAnswers: () => {
          track("Reset answers");
          set({
            answers: blankAnswersList,
            favoriteTopics: [],
            highestVisibleQuestion: 1,
          });
        },
      }),
      {
        name: `app-store-hennepin`, // unique key per city
        version: cityVersion,
        migrate: (persistedState, version): AppState => {
          console.log(`Migrating AppState from version`, version);

          const state = persistedState as AppState;

          if (!version || version < cityVersion) {
            return {
              ...state,
              answers: blankAnswersList,
              favoriteTopics: [],
              highestVisibleQuestion: 1,
              score: null,
              version: cityVersion,
            };
          } else {
            return { ...state, version: cityVersion };
          }
        },
      },
    ),
  );
}

const useStore = createAppStore();

export function useAppStore<T>(selector: (state: AppState) => T) {
  let store = useStore;

  return store(selector);
}
