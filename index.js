// 1. تفعيل روابط القائمة (Navbar Active Link) عند التمرير
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute("id");

        // البحث عن الرابط الذي يحتوي على ID القسم
        const navLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll(".nav-links li").forEach(li => li.classList.remove("active"));
                navLink.parentElement.classList.add("active");
                current.classList.add("active"); // تفعيل كلاس الأنميشن للقسم
            }
        }
    });
});

// 2. أنميشن تحريك اللوجو (التأكد من الكلاس الصحيح)
// تم تغيير '.logo img' إلى '.main-logo' ليتطابق مع الـ CSS الجديد
const logo = document.querySelector('.main-logo');
let t = 0;
if (logo) {
    setInterval(() => {
        t += 0.05;
        logo.style.transform = `translateY(${Math.sin(t) * 15}px)`;
    }, 30);
}

// 3. مراقب الظهور (Intersection Observer) للبطاقات والعناصر
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

// تشغيل المراقب على كل العناصر التي تحمل كلاس reveal
document.querySelectorAll('.reveal, .ambition-card, .flip-card').forEach(el => {
    revealObserver.observe(el);
});

// 4. برمجة السلايدر (Slider) مع التحقق من وجوده
const slider = document.getElementById('mainSlider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

if (slider && nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        slider.scrollLeft += 350;
    });

    prevBtn.addEventListener('click', () => {
        slider.scrollLeft -= 350;
    });
}

// 5. أنميشن الظهور من الجوانب (Reveal Left & Right)
const sideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-left').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateX(-50px)";
    el.style.transition = "1s ease-out";
    sideObserver.observe(el);
});

document.querySelectorAll('.reveal-right').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateX(50px)";
    el.style.transition = "1s ease-out";
    sideObserver.observe(el);
});

// 6. تأثير تحريك النجوم/النقاط مع الماوس (اختياري)
document.addEventListener('mousemove', (e) => {
    const stars = document.querySelectorAll('.star, .decoration-stars span');
    if (stars.length > 0) {
        let x = (e.clientX / window.innerWidth) * 15;
        let y = (e.clientY / window.innerHeight) * 15;
        
        stars.forEach(star => {
            star.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
});

// 7. إطلاق حدث التمرير عند التحميل لضبط الحالة الابتدائية
window.dispatchEvent(new Event('scroll'));