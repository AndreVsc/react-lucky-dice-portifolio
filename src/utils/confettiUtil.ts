import confetti from 'canvas-confetti';

export const launchConfetti = () => {
    confetti({
        particleCount: 200,
        angle: 240,
        spread: 200,
        origin: { x: 1.2 , y: 0.3 },
        colors: ['#bb0000', '#FF0000', '#00FF00', '#0000FF'],

        shapes: ['circle', 'square'],
        gravity: 0.5,
        scalar: 1.2,
    });

    confetti({
        particleCount: 200,
        angle: 60,
        spread: 200,
        origin: { x: -0.1 },
        colors: ['#bb0000', '#FF0000', '#00FF00', '#0000FF'],
        shapes: ['circle', 'square'],
        gravity: 0.5,
        scalar: 1.2,
    });
};