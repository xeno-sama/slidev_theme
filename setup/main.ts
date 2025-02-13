import { defineAppSetup } from "@slidev/types";
import StickyButton from "../custom-tools/sticky-notes/StickyButton.vue";
import ImageWithText from "../custom-tools/image-text/ImageWithText.vue";
import NavButton from "../custom-tools/navigation/NavButton.vue";

export default defineAppSetup(({ app, router }) => {
    app.component('StickyButton', StickyButton)
    app.component('ImageWithText', ImageWithText)
    app.component('NavButton', NavButton)
})