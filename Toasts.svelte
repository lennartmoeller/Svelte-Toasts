<!--
  @author     Lennart Möller <kontakt@lennartmoeller.com>
  @copyright  2020-2022 Lennart Möller
-->

<script>
    import {fade, fly} from 'svelte/transition'
    import {flip} from 'svelte/animate'
    import {toastStore} from './toast.js'
</script>

<div id="toasts">
    {#each Object.entries($toastStore) as [id, toast] (id)}
        <div animate:flip class="toast {toast.type}" in:fade={{duration: 200}} out:fly={{x:20}}>
            <div class="icon">
                <i class:icon-done={toast.type === 'success'}
                   class:icon-close={toast.type === 'error'}
                   class:icon-exclamation-mark={toast.type === 'warning'}
                   class:icon-information={toast.type === 'info'}></i>
            </div>
            <div class="message">
                {toast.message}
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    // === COLORS === //
    $success-toast-bg-color: #ebf7ee;
    $success-toast-border-color: #bee5c8;
    $success-icon-bg-color: #39b45a;
    $info-toast-bg-color: #e5effa;
    $info-toast-border-color: #a8c9ed;
    $info-icon-bg-color: #006ce4;
    $warning-toast-bg-color: #fef7ea;
    $warning-toast-border-color: #f9ddae;
    $warning-icon-bg-color: #ef9400;
    $error-toast-bg-color: #fcedea;
    $error-toast-border-color: #f5c5bb;
    $error-icon-bg-color: #ea4e2c;

    // === OTHER === //
    $window-distance: 20px;
    $item-distance: 10px;

    #toasts {
        position: fixed;
        z-index: 2;
        right: $window-distance;
        bottom: $window-distance;
        display: flex;
        align-items: flex-end;
        flex-direction: column-reverse;
        .toast {
            font-size: 13px;
            font-weight: 600;
            display: grid;
            align-items: center;
            width: fit-content;
            margin-top: $item-distance;
            padding: 8px 15px 8px 10px;
            border: 2px solid;
            border-radius: 6px;
            background-color: white;
            box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.05);
            grid-auto-flow: column;
            grid-column-gap: 10px;
            .icon {
                line-height: 1;
                padding: 5px;
                border-radius: 100px;
                i {
                    font-size: 18px;
                    color: white;
                }
            }
            .message {
                height: fit-content;
            }
            &.success {
                border-color: $success-toast-border-color;
                background-color: $success-toast-bg-color;
                .icon {
                    background-color: $success-icon-bg-color;
                }
            }
            &.info {
                border-color: $info-toast-border-color;
                background-color: $info-toast-bg-color;
                .icon {
                    background-color: $info-icon-bg-color;
                }
            }
            &.warning {
                border-color: $warning-toast-border-color;
                background-color: $warning-toast-bg-color;
                .icon {
                    background-color: $warning-icon-bg-color;
                }
            }
            &.error {
                border-color: $error-toast-border-color;
                background-color: $error-toast-bg-color;
                .icon {
                    background-color: $error-icon-bg-color;
                }
            }
            &.success, &.error {
                .icon {
                    padding: 4px;
                    i {
                        font-size: 20px;
                    }
                }
            }
        }
    }
</style>
