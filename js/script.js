document.addEventListener('DOMContentLoaded', function() {
    // 联系我们表单校验
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // 清空提示
            document.querySelectorAll('.tip').forEach(tip => tip.textContent = '');
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            
            // 姓名校验
            if (!name.value.trim()) {
                name.nextElementSibling.textContent = '请输入姓名';
                isValid = false;
            }
            
            // 邮箱校验
            const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if (!emailReg.test(email.value)) {
                email.nextElementSibling.textContent = '请输入正确的邮箱格式';
                isValid = false;
            }
            
            // 手机号校验
            const phoneReg = /^1[3-9]\d{9}$/;
            if (!phoneReg.test(phone.value)) {
                phone.nextElementSibling.textContent = '请输入11位正确的手机号';
                isValid = false;
            }
            
            if (isValid) {
                window.location.href = 'contact-success.html';
            }
        });
    }
});
