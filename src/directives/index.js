import { useIntersectionObserver } from '@vueuse/core'
// export const lazyPlugin = {
//     install(app) {
//         app.directive('img-lazy', {
//             mounted(el, binding) {
//                 const { stop } = useIntersectionObserver(
//                     el,
//                     ([{ isIntersecting }]) => {
//                         console.log(isIntersecting)
//                         el.src = binding.value
//                     },
//                 )
//             }
//         })
//     }

// }
// export const lazyPlugin = (app) => {
//     app.directive('img-lazy', {
//         mounted(el, binding) {
//             const { stop } = useIntersectionObserver(
//                 el,
//                 ([{ isIntersecting }]) => {
//                     console.log(isIntersecting)
//                     el.src = binding.value
//                 },
//             )
//         }
//     })
// }

export const lazyPlugin = {
    install(app) {
        app.directive('img-lazy', {
            mounted(el, binding) {
                useIntersectionObserver(el, ([{ isIntersecting }]) => {
                    el.src = binding.value
                })
            },
        })
    }
}