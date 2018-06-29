module Tape {

    export module NavigatorStack {

        let __loaders__: NavigatorLoader[] = [];
        let __loading__ = false;

        function all() {
            return __loaders__;
        }

        function length() {
            return __loaders__.length;
        }

        function getStack(index = 0) {
            var len = length();
            return len > index ? __loaders__[len - 1 - index] : null;
        }

        function showStack(index = 0, anim: boolean = false, callback: Function = null) {
            let stack = getStack(index);
            if (!stack) {
                return;
            }
            stack.show(anim && length() > 1, callback);
        }

        function putStack(stack, callback: Function) {
            __loaders__.push(stack);
            showStack(0, true, () => {
                let stack = getStack(1);
                if (!stack) {
                    return;
                }
                stack.hide();
                callback && callback();
            });
        }

        function finishStack(stacks: NavigatorLoader[]) {
            if (!stacks || stacks.length <= 0) {
                return;
            }
            for (var i = 0; length() > 1 && i < stacks.length; i++) {
                var stack = stacks[i];
                __loaders__.splice(__loaders__.indexOf(stack), 1);
                stack.hide();
                stack.exit();
            }
            showStack(0);
        }

        function popStack(count) {
            if (length() <= 1 && count <= 0) {
                return;
            }
            let pops = __loaders__.splice(length() - count, count);
            pops.forEach(element => {
                element.hide();
                element.exit();
            });
            showStack(0);
        }

        /** navigate */
        export function navigate(page: any, params = {}, action: Function = null) {
            new NavigatorLoader({
                page,
                params,
                onLoaded: (loader) => {
                    __loading__ = false;
                    UIManager.addMainUI(loader);
                    putStack(loader, () => {
                        action && action(true);
                    });
                },
                onLoadProgress: (loader, progress) => {
                    if (__loading__) {
                        var stack = getStack();
                        stack && stack.nextProgress(progress);
                    }
                }
            });
        }

        /** popToTop */
        export function popToTop() {
            popStack(length());
        }

        /** pop */
        export function pop(number: number = 1) {
            popStack(number)
        }

        /** finish */
        export function finish(page: any, instance: any = null) {
            var stacks = [];
            all().forEach(stack => {
                if (stack.canFinish(page, instance)) {
                    stacks.push(stack);
                }
            });
            finishStack(stacks);
        }

    }

}