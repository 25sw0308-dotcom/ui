/* ─────────────────────────────
   ① 모바일 메뉴
───────────────────────────── */

const menuBtn = document.querySelector('#menuBtn');
const gnb = document.querySelector('#gnb');

if (menuBtn && gnb) {

  menuBtn.addEventListener('click', function () {

    gnb.classList.toggle('is-open');

    menuBtn.setAttribute(
      'aria-expanded',
      gnb.classList.contains('is-open')
    );

  });

}



/* ─────────────────────────────
   ② 카테고리 필터
───────────────────────────── */

const filters = document.querySelector('#filters');

if (filters) {

  const chips = filters.querySelectorAll('.chip');
  const cards = document.querySelectorAll('.card');

  chips.forEach(function (chip) {

    chip.addEventListener('click', function () {

      chips.forEach(function (c) {
        c.classList.remove('is-active');
      });

      chip.classList.add('is-active');


      const want = chip.dataset.filter;


      cards.forEach(function (card) {

        const match =
          want === 'all' ||
          card.dataset.cat === want;

        card.classList.toggle(
          'is-hidden',
          !match
        );

      });

    });

  });

}



/* ─────────────────────────────
   ③ 신청 폼 검증
───────────────────────────── */

const applyForm =
  document.querySelector('#applyForm');

if (applyForm) {

  const formScreen =
    document.querySelector('#formScreen');

  const doneScreen =
    document.querySelector('#doneScreen');


  function setError(fieldEl, errorEl, show) {

    fieldEl.classList.toggle(
      'has-error',
      show
    );

    errorEl.classList.toggle(
      'is-show',
      show
    );

  }


  applyForm.addEventListener(
    'submit',
    function (e) {

      e.preventDefault();

      let ok = true;


      /* 이름 */

      const name =
        document.querySelector('#name');

      const nameBad =
        name.value.trim() === '';


      setError(
        name.closest('.field'),
        document.querySelector('#err-name'),
        nameBad
      );


      if (nameBad) {
        ok = false;
      }



      /* 연락처 */

      const tel =
        document.querySelector('#tel');

      const telBad =
        !tel.checkValidity();


      setError(
        tel.closest('.field'),
        document.querySelector('#err-tel'),
        telBad
      );


      if (telBad) {
        ok = false;
      }



      /* 이메일 */

      const email =
        document.querySelector('#email');

      const emailBad =
        !email.checkValidity();


      setError(
        email.closest('.field'),
        document.querySelector('#err-email'),
        emailBad
      );


      if (emailBad) {
        ok = false;
      }



      /* 참가 인원 */

      const count =
        document.querySelector('#count');

      const n =
        Number(count.value);


      const countBad =
        !(n >= 1 && n <= 4) ||
        count.value === '';


      setError(
        count.closest('.field'),
        document.querySelector('#err-count'),
        countBad
      );


      if (countBad) {
        ok = false;
      }



      /* 좌석 */

      const seat =
        document.querySelector(
          'input[name="seat"]:checked'
        );


      const seatBad =
        !seat;


      setError(
        document
          .querySelector('#err-seat')
          .closest('.field'),

        document.querySelector('#err-seat'),

        seatBad
      );


      if (seatBad) {
        ok = false;
      }



      /* 개인정보 동의 */

      const agree =
        document.querySelector('#agree');

      const agreeBad =
        !agree.checked;


      setError(
        agree.closest('.field'),
        document.querySelector('#err-agree'),
        agreeBad
      );


      if (agreeBad) {
        ok = false;
      }



      /* 실패 */

      if (!ok) {
        return;
      }



      /* 완료 화면 */

      document.querySelector('#r-name')
        .textContent = name.value;

      document.querySelector('#r-tel')
        .textContent = tel.value;

      document.querySelector('#r-seat')
        .textContent = seat.value;

      document.querySelector('#r-count')
        .textContent = count.value + '명';



      formScreen.classList.add(
        'is-hidden'
      );

      doneScreen.classList.remove(
        'is-hidden'
      );

    }
  );

}



/* ─────────────────────────────
   ④ 요청 사항 글자 수
───────────────────────────── */

const note =
  document.querySelector('#note');

const noteCount =
  document.querySelector('#noteCount');


if (note && noteCount) {

  note.addEventListener(
    'input',
    function () {

      noteCount.textContent =
        note.value.length;

    }
  );

}



/* ─────────────────────────────
   ⑤ 맨 위로 버튼
───────────────────────────── */

const topBtn =
  document.querySelector('#topBtn');


if (topBtn) {

  window.addEventListener(
    'scroll',
    function () {

      if (window.scrollY > 300) {

        topBtn.classList.add(
          'is-show'
        );

      } else {

        topBtn.classList.remove(
          'is-show'
        );

      }

    }
  );


  topBtn.addEventListener(
    'click',
    function () {

      window.scrollTo({

        top: 0,

        behavior: 'smooth'

      });

    }
  );

}
