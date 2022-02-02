# Svelte-Toasts

A simple and lightweight toast component for Svelte 3.

## Usage

Import Svelte-Toasts:

```js
import {toast} from "Core/Base/src/Utility/Toasts/toast";
```

You can use 4 different types of toasts:

```js
toast.error('This is a red error toast');
toast.warning('This is a yellow warning toast');
toast.info('This is a blue info toast');
toast.success('This is a green success toast');
```

You can also specify the display duration for each individual toast:

```js
toast.info('This is a toast with a display time of 3 seconds')
toast.info('This is a toast with a display time of 5 seconds', 5000)
```

