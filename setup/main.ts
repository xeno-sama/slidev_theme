import { defineAppSetup } from "@slidev/types";
import StickyButton from "../custom-tools/sticky-notes/StickyButton.vue";
import ImageWithText from "../custom-tools/image-text/ImageWithText.vue";
import NavButton from "../custom-tools/navigation/NavButton.vue";
import NavButtonFixed from "../custom-tools/navigation/NavButtonFixed.vue";
import TxtColorBloc from "../custom-tools/containers/txt_clr_bloc.vue";
import TxtColorBlocDrag from "../custom-tools/containers/txt_clr_bloc_drag.vue";
import NavImageButtonDrag from "../custom-tools/navigation/NavButtonImageText.vue";
import NavImageButtonFixed from "../custom-tools/navigation/NavImageButtonFixed.vue";


export default defineAppSetup(({ app, router }) => {
    app.component('StickyButton', StickyButton)
    app.component('ImageWithText', ImageWithText)
    app.component('NavButtonDrag', NavButton)
    app.component('NavButtonFixed', NavButtonFixed)
    app.component('TxtColorBloc', TxtColorBloc)
    app.component('TxtColorBlocDrag', TxtColorBlocDrag)
    app.component('NavImageButtonDrag', NavImageButtonDrag)
    app.component('NavImageButtonFixed', NavImageButtonFixed)
})