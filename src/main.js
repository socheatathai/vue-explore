import { createApp } from "vue";
import App from "./App.vue";
import TagsInput from "./components/TagsInput.vue";

const app = createApp(App);
app.component("tags-input", TagsInput);
app.mount("#app");
