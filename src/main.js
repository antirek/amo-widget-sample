import { createApp } from 'vue';
import ChatFrame from './components/ChatFrame';

export default function (widget) {
    widget.callbacks = {
        settings: function () {},
        init: async function () {
            return true;
        },
        bind_actions: function () {
            return true;
            },
        render: function () {
            return true;
            },
        dpSettings: function () {},
        advancedSettings: function () {
            const app = createApp(ChatFrame);
            app.mount('#page_holder');
            return true;
        },
        destroy: function () {},
        contacts: {
            selected: function () {}
        },
        onSalesbotDesignerSave: function () {},
        leads: {
            selected: function () {}
        },
        todo: {
            selected: function () {}
        },
        onSave: function () {
            return true;
        },
        onAddAsSource: function () {}
    }

    return widget;
}
