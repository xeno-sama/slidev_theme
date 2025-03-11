import { defineAppSetup } from "@slidev/types";
import StickyButton from "../custom-tools/sticky-notes/StickyButton.vue";
import ImageWithText from "../custom-tools/image-text/ImageWithText.vue";
import NavButton from "../custom-tools/navigation/NavButton.vue";
import NavButtonFixed from "../custom-tools/navigation/NavButtonFixed.vue";
import ColorContainer from "../custom-tools/containers/color_container.vue";

export default defineAppSetup(({ app, router }) => {
    app.component('StickyButton', StickyButton)
    app.component('ImageWithText', ImageWithText)
    app.component('NavButton', NavButton)
    app.component('NavButtonFixed', NavButtonFixed)
    app.component('ColorContainer', ColorContainer)
})