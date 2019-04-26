import actionType from '../action-type';

const initialState = {
    list: [],
    playWay: 0, // 播放方式(顺序)
    currentPlayIndex: 0, // 当前正在播放歌曲的list的index
    randomPlayedIndex: [],
    isPaused: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_CURRENT_SONG_LIST:
            return {
                ...state,
                list: action.songList
            };
        case actionType.SET_CURRENT_PLAY_INDEX:
            return {
                ...state,
                currentPlayIndex: action.index
            };
        case actionType.SET_RANDOM_PLAYED_INDEX:
            return {
                ...state,
                randomPlayedIndex: state.randomPlayedIndex.push(action.index)
            };
        case actionType.RESET_RANDOM_PLAYED_INDEX:
            return {
                ...state,
                randomPlayedIndex: []
            };
        case actionType.SET_PLAY_WAY:
            return {
                ...state,
                playWay: action.code
            };
        case actionType.SET_IS_PAUSED:
            return {
                ...state,
                isPaused: action.boolean
            };
        default:
            return state
    }
};
