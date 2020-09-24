const initialState = {
  1600293600000: {
    meetings: 2,
    feeling: 5,
    moods: ['tired', 'happy', 'bored'],
    suggestions: ['Meetings', 'Prayer', 'Meditation', 'Useful', 'Kind to Myself', 'Gratitude', 'Step 10s', 'Inventory', 'Called a Newcomer'],
  },
  1600380000000: {
    meetings: 1,
    feeling: 4,
    moods: ['tired', 'happy', 'down'],
    suggestions: ['Gratitude', 'Prayer', 'Meditation', 'Useful', 'Kind to Myself']
  },
  1600466400000: {
    meetings: 0,
    feeling: 3,
    moods: ['elated', 'happy', 'sad'],
    suggestions: ['Inventory', 'Called a Newcomer', 'Prayer', 'Meditation', 'Useful', 'Kind to Myself']
  },
  1600552800000: {
    meetings: 2,
    feeling: 2,
    moods: ['joyful', 'happy', 'sad'],
    suggestions: ['Kind to Myself']
  },
  1600639200000: {
    meetings: 5,
    feeling: 50,
    moods: ['bored', 'happy', 'sad'],
    suggestions: ['Prayer', 'Meditation', 'Useful', 'Kind to Myself']
  },
  1600725600000: {
    meetings: 2,
    feeling: 10,
    moods: [],
    suggestions: []
  },
  1600812000000: {
    meetings: 0,
    feeling: 9,
    moods: ['stressed', 'happy', 'sad'],
    suggestions: ['Prayer', 'Meditation', 'Useful', 'Kind to Myself']
  },
  1600898400000: {
    meetings: 9,
    feeling: 7,
    moods: ['tired', 'happy', 'sad'],
    suggestions: ['Prayer', 'Meditation', 'Useful', 'Kind to Myself']
  },
}

const historicalDataReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default historicalDataReducer;