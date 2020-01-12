let mixin = {
    props: {
        init_cookie: {}
    },
    created: function() {
        this.setCookie();
    },
    mounted: function () {
        
    },
    data: function () {
        return {
            cookie: this.init_cookie,
        };
    },
    methods: {
        setCookie: function() {
            setTimeout(() => {
                
            }, 0);
        },
    }
};

export default mixin;