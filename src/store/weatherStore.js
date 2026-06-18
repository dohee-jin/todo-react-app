import { create } from 'zustand';

export const useWeatherStore = create((set) => ({
    // 상테
    weather: null,
    isLoading: false,
    error: null,

    // api 요청
    fetchWeather: async (city) => {
        const API_KEY = import.meta.env.VITE_OPEN_WEATHER_KEY;

        set({isLoading: true, error: null});

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather` +
                `?q=${encodeURIComponent(city)}` +
                `&units=metric` +
                `&appid=${API_KEY}`
            );
            // 응답 실패 시
            if(!res.ok) {
                let msg = `${res.status} ${res.statusText}`;
                try {
                    const errData = await res.json();
                    if (errData?.message) {
                        msg = `${res.status} ${errData.message}`;
                    }
                } catch  {

                }
                throw new Error(msg);
            }

            const data = await res.json();
            set({
                weather: data,
                isLoading: false,
                error: null
            })
        } catch (err) {
            console.error('fetchWeather error: ', err);
            set({
                isLoading: false,
                error: err.message || `알 수 없는 오류`
            })
        }
    },
}))