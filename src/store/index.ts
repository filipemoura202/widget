import { reactive, readonly } from 'vue'

export type StoreState = {
    currentComponent: string;
    fingerprint: string;
    message: string;
    feedbackType: string;
    apiKey: string;
    currentPage: string;
}

const initialState: StoreState = {
  currentComponent: 'SelectFeedbackType',
  feedbackType: '',
  fingerprint: '',
  message: '',
  apiKey: '',
  currentPage: ''
}

const state = reactive<StoreState>({ ...initialState })

export function setCurrentComponent (component: string): void {
  state.currentComponent = component
}

export function setFeedbackType (feedbackType: string): void {
  state.feedbackType = feedbackType
}

export function setCurrentPage (currentPage: string): void {
  state.currentPage = currentPage
}

export function setApiKey (apiKey: string): void {
  state.apiKey = apiKey
}

export function setFingerprint (fingerprint: string): void {
  state.fingerprint = fingerprint
}

export function setMessage (message: string): void {
  state.message = message
}

export function resetStore (): void{
  setCurrentComponent(initialState.currentComponent)
  setFeedbackType(initialState.feedbackType)
  setFingerprint(initialState.fingerprint)
  setApiKey(initialState.apiKey)
  setMessage(initialState.message)
  setCurrentPage(initialState.currentPage)
}

export default readonly(state)
