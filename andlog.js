// follow @HenrikJoreteg and @andyet if you like this ;)
(function () {
    var inNode = typeof window === 'undefined',
        ls = !inNode && window.localStorage,
        out = {};

    var options = {
        enabled: true
    }
    
    if (inNode) {
        module.exports = console;
        return;
    }

    if (ls && ls.debug && window.console) {
        options.enabled = true;
        out = window.console;
    } else {
        options.enabled = false;
        var methods = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),
            l = methods.length,
            fn = function () {};

        while (l--) {
            out[methods[l]] = fn;
        }
    }
    if (typeof exports !== 'undefined') {
        module.exports = out;
    } else {
        window.console = out;
    }
})();
