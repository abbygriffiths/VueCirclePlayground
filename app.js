Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: "",
            size: 150,
            rotation: 0
        };
    },
    computed: {
        circleClasses() {
            return {
                purple: this.isPurple
            };
        },
        circleSize() {
            return {
                height: this.size + "px",
                width: this.size + "px",
                lineHeight: this.size + "px",
            };
        },
        circleTransform() {
            return {
                transform: `rotate(${this.rotation}deg)`,
            };
        }
    }
}).mount('#app');
