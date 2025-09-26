// Ожидаем загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Настройки Chart.js
    Chart.defaults.font.family = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    Chart.defaults.color = '#666666';
    Chart.defaults.plugins.legend.display = false;

    // Общие настройки для всех графиков
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    padding: 20,
                    usePointStyle: true,
                    font: {
                        size: 12,
                        weight: '500'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                borderColor: '#000000',
                borderWidth: 1,
                cornerRadius: 8,
                displayColors: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#999999',
                    font: {
                        size: 11,
                        weight: '500'
                    }
                }
            },
            y: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    color: '#999999',
                    font: {
                        size: 11,
                        weight: '500'
                    }
                }
            }
        },
        interaction: {
            intersect: false,
            mode: 'index'
        },
        elements: {
            point: {
                radius: 4,
                hoverRadius: 8,
                borderWidth: 2,
                hoverBorderWidth: 3
            },
            line: {
                borderWidth: 3,
                tension: 0.4
            }
        }
    };

    // 1. График роста пользователей
    const usersCtx = document.getElementById('usersChart').getContext('2d');
    new Chart(usersCtx, {
        type: 'line',
        data: {
            labels: ['Q4 2025', 'Q1 2026', 'Q2 2026', 'Q3 2026', 'Q4 2026', 'Q1 2027', 'Q2 2027', 'Q3 2027'],
            datasets: [{
                label: 'Активные пользователи',
                data: [100, 500, 2000, 5000, 15000, 35000, 75000, 150000],
                borderColor: '#000000',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                fill: true,
                pointBackgroundColor: '#000000',
                pointBorderColor: '#ffffff'
            }, {
                label: 'Платные пользователи',
                data: [10, 75, 400, 1200, 4500, 12250, 26250, 52500],
                borderColor: '#666666',
                backgroundColor: 'rgba(102, 102, 102, 0.1)',
                fill: true,
                pointBackgroundColor: '#666666',
                pointBorderColor: '#ffffff'
            }]
        },
        options: {
            ...chartOptions,
            scales: {
                ...chartOptions.scales,
                y: {
                    ...chartOptions.scales.y,
                    beginAtZero: true,
                    ticks: {
                        ...chartOptions.scales.y.ticks,
                        callback: function(value) {
                            return value >= 1000 ? (value / 1000) + 'K' : value;
                        }
                    }
                }
            }
        }
    });

    // 2. График финансовых показателей
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCtx, {
        type: 'bar',
        data: {
            labels: ['2025 Q4', '2026 Q1', '2026 Q2', '2026 Q3', '2026 Q4', '2027 Q1', '2027 Q2', '2027 Q3'],
            datasets: [{
                label: 'Выручка ($K)',
                data: [5, 35, 120, 350, 1200, 3500, 8500, 18000],
                backgroundColor: ['#1a1a1a', '#333333', '#1a1a1a', '#333333', '#1a1a1a', '#333333', '#1a1a1a', '#333333'],
                borderColor: '#000000',
                borderWidth: 2,
                borderRadius: 6,
                borderSkipped: false,
            }]
        },
        options: {
            ...chartOptions,
            scales: {
                ...chartOptions.scales,
                y: {
                    ...chartOptions.scales.y,
                    beginAtZero: true,
                    ticks: {
                        ...chartOptions.scales.y.ticks,
                        callback: function(value) {
                            return '$' + (value >= 1000 ? (value / 1000) + 'M' : value + 'K');
                        }
                    }
                }
            }
        }
    });

    // 3. График размера рынка по странам
    const marketCtx = document.getElementById('marketChart').getContext('2d');
    new Chart(marketCtx, {
        type: 'doughnut',
        data: {
            labels: ['Узбекистан', 'Казахстан', 'Кыргызстан', 'Таджикистан', 'Туркменистан'],
            datasets: [{
                data: [75, 120, 25, 15, 10],
                backgroundColor: ['#000000', '#1a1a1a', '#333333', '#666666', '#999999'],
                borderColor: '#ffffff',
                borderWidth: 3,
                hoverBorderWidth: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        usePointStyle: true,
                        font: {
                            size: 11,
                            weight: '500'
                        },
                        generateLabels: function(chart) {
                            const data = chart.data;
                            return data.labels.map((label, index) => ({
                                text: `${label}: $${data.datasets[0].data[index]}M`,
                                fillStyle: data.datasets[0].backgroundColor[index],
                                strokeStyle: data.datasets[0].backgroundColor[index],
                                pointStyle: 'circle'
                            }));
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: '#000000',
                    borderWidth: 1,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return `${context.label}: $${context.parsed}M (${percentage}%)`;
                        }
                    }
                }
            },
            cutout: '50%',
            elements: {
                arc: {
                    borderWidth: 2,
                    hoverBorderWidth: 4
                }
            }
        }
    });

    // 4. График моделей монетизации
    const monetizationCtx = document.getElementById('monetizationChart').getContext('2d');
    new Chart(monetizationCtx, {
        type: 'radar',
        data: {
            labels: ['B2C Консультации', 'B2B Подписки', 'Фарм партнерства', 'Клиник партнерства', 'Страховки', 'Телеком'],
            datasets: [{
                label: '2026',
                data: [70, 20, 40, 30, 10, 15],
                borderColor: '#666666',
                backgroundColor: 'rgba(102, 102, 102, 0.1)',
                pointBackgroundColor: '#666666',
                pointBorderColor: '#ffffff',
                pointRadius: 4
            }, {
                label: '2027 (прогноз)',
                data: [60, 85, 90, 75, 50, 80],
                borderColor: '#000000',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                pointBackgroundColor: '#000000',
                pointBorderColor: '#ffffff',
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: {
                            size: 12,
                            weight: '500'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: '#000000',
                    borderWidth: 1,
                    cornerRadius: 8
                }
            },
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            size: 10,
                            weight: '500'
                        },
                        color: '#666666'
                    },
                    ticks: {
                        display: false
                    },
                    min: 0,
                    max: 100
                }
            },
            elements: {
                line: {
                    borderWidth: 2,
                    tension: 0.1
                },
                point: {
                    radius: 3,
                    hoverRadius: 6
                }
            }
        }
    });

    // Плавная анимация при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Наблюдаем за элементами для анимации
    const animateElements = document.querySelectorAll('.about-card, .team-member, .chart-container, .phase');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Плавный скролл для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Изменение прозрачности хедера при скролле
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(5px)';
        }
        lastScrollY = window.scrollY;
    });

    // Добавляем интерактивность к статистике в hero секции
    const stats = document.querySelectorAll('.stat');
    stats.forEach((stat, index) => {
        stat.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.25)';
        });

        stat.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        });
    });

    // Анимация чисел в статистике
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            if (target >= 1000000) {
                element.textContent = (current / 1000000).toFixed(1) + 'M';
            } else if (target >= 1000) {
                element.textContent = (current / 1000).toFixed(0) + 'K';
            } else {
                element.textContent = Math.floor(current) + '%';
            }
        }, 16);
    }

    // Запуск анимации счетчиков при появлении в области видимости
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('h3');
                const text = counter.textContent;

                if (text.includes('$')) {
                    animateCounter(counter, 300);
                } else if (text.includes('%')) {
                    animateCounter(counter, 93);
                } else {
                    animateCounter(counter, 78);
                }

                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => counterObserver.observe(stat));
});