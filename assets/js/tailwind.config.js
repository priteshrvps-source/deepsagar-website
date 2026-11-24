
tailwind.config = {
    theme: {
        extend: {
            colors: {
                ocean: {
                    DEFAULT: '#087EAD',
                    dark: '#063B5C',
                    light: '#38BDF8',
                    aqua: '#00A6C7',
                    pale: '#BAE6FD'
                },
                coastal: '#F0F9FF',
                deep: '#052F49'
            },

            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
                display: ['Playfair Display', 'serif']
            },

            boxShadow: {
                soft: '0 10px 35px rgba(8,126,173,0.10)',
                ocean: '0 15px 40px rgba(6,59,92,0.18)',
                premium: '0 25px 70px rgba(6,59,92,0.20)'
            },

            animation: {
                float: 'float 5s ease-in-out infinite',
                'fade-up': 'fadeUp 0.8s ease-out both',
                'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate'
            },

            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-12px)' }
                },

                fadeUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },

                slowZoom: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.08)' }
                }
            }
        }
    }
};
