import store from '../src/store/index.js'

export default previewComponent => {
    return {
        store,
        render(createElement) {
            return createElement(previewComponent)
        }
    }
}
