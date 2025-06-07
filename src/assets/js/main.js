
document.addEventListener('DOMContentLoaded', function () {
  // 01. data background
  document.querySelectorAll('[data-background]').forEach(function (element) {
    element.style.backgroundImage = 'url(' + element.getAttribute('data-background') + ')';
  });

  // 02. animated hamburger menu
  document.querySelectorAll('.navbar-toggler').forEach(function (toggler) {
    toggler.addEventListener('click', function () {
      this.classList.toggle('toggle-active');
      document.querySelector('.navbar').classList.toggle('navbar__active');
    });
  });

  // 03. position navbar on scroll and resize
  function handleScroll() {
    var scroll = window.scrollY;
    if (scroll >= 10) {
      document.querySelectorAll('.header').forEach(function (el) {
        el.classList.add('header__active');
      });
      document.querySelectorAll('.dashboard-header').forEach(function (el) {
        el.classList.add('dashboard-header__active');
      });
    } else {
      document.querySelectorAll('.header').forEach(function (el) {
        el.classList.remove('header__active');
      });
      document.querySelectorAll('.dashboard-header').forEach(function (el) {
        el.classList.remove('dashboard-header__active');
      });
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  window.addEventListener('resize', function () {
    document.querySelectorAll('.dropdown-menu.show').forEach(function (menu) {
      menu.classList.remove('show');
    });
    document.querySelectorAll('.dropdown-toggle.show').forEach(function (toggle) {
      toggle.classList.remove('show');
    });

    document.querySelectorAll('.alt__loan__grid.col-12.alt__loan__list').forEach(function (grid) {
      grid.classList.remove('col-12', 'alt__loan__list');
      grid.classList.add('col-md-6', 'col-xl-4');
    });

    document.querySelectorAll('.notification__wrapper').forEach(function (wrapper) {
      wrapper.classList.remove('notification__wrapper__active');
    });

    document.querySelectorAll('.sidebar').forEach(function (sidebar) {
      sidebar.classList.remove('sidebar__active');
    });
  });

  // 04. job details tab
  var positionContents = document.querySelectorAll('.position__details__content');
  positionContents.forEach(function (content) {
    content.style.display = 'none';
  });
  if (positionContents.length > 0) {
    positionContents[0].style.display = 'block';
  }

  document.querySelectorAll('.job__application__btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.job__application__btn').forEach(function (b) {
        b.classList.add('button--secondary');
      });
      this.classList.remove('button--secondary');

      positionContents.forEach(function (content) {
        content.style.display = 'none';
      });
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.style.display = 'block';
      }
    });
  });

  // 05. property list and grid tabs
  document.querySelectorAll('.grid__view').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.property__grid__area__wrapper__inner').forEach(function (el) {
        el.classList.add('col-xl-4', 'col-md-6');
      });
      document.querySelectorAll('.property__grid__area__wrapper__inner__two').forEach(function (el) {
        el.classList.remove('col-xl-5');
      });
      document.querySelectorAll('.property__grid__area__wrapper__inner__three').forEach(function (el) {
        el.classList.remove('col-xl-7');
      });
      document.querySelectorAll('.property__list__wrapper').forEach(function (el) {
        el.classList.add('property__grid');
      });
    });
  });

  document.querySelectorAll('.grid__list').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.property__grid__area__wrapper__inner').forEach(function (el) {
        el.classList.remove('col-xl-4', 'col-md-6');
      });
      document.querySelectorAll('.property__grid__area__wrapper__inner__two').forEach(function (el) {
        el.classList.add('col-xl-5');
      });
      document.querySelectorAll('.property__grid__area__wrapper__inner__three').forEach(function (el) {
        el.classList.add('col-xl-7');
      });
      document.querySelectorAll('.property__list__wrapper').forEach(function (el) {
        el.classList.remove('property__grid');
      });
    });
  });

  document.querySelectorAll('.grid__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.grid__btn').forEach(function (b) {
        b.classList.remove('grid__btn__active');
      });
      this.classList.add('grid__btn__active');
    });
  });

  // 06. faq tab
  var faqContents = document.querySelectorAll('.faq__tab__content');
  faqContents.forEach(function (content) {
    content.style.display = 'none';
  });
  if (faqContents.length > 0) {
    faqContents[0].style.display = 'block';
  }

  document.querySelectorAll('.faq__tab__btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.faq__tab__btn').forEach(function (b) {
        b.classList.remove('faq__tab__btn__active');
      });
      this.classList.add('faq__tab__btn__active');

      faqContents.forEach(function (content) {
        content.style.display = 'none';
      });
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.style.display = 'block';
      }
    });
  });

  // 07. property list and grid two
  document.querySelectorAll('.grid__vieww').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.alt__loan__grid').forEach(function (el) {
        el.classList.add('col-xl-4', 'col-md-6');
        el.classList.remove('col-12', 'alt__loan__list');
      });
    });
  });

  document.querySelectorAll('.grid__listt').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.alt__loan__grid').forEach(function (el) {
        el.classList.remove('col-xl-4', 'col-md-6');
        el.classList.add('col-12', 'alt__loan__list');
      });
    });
  });

  document.querySelectorAll('.grid__btnn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.grid__btnn').forEach(function (b) {
        b.classList.remove('grid__btnn__active');
      });
      this.classList.add('grid__btnn__active');
    });
  });

  // 08. notification popup
  document.querySelectorAll('.notification__icon').forEach(function (icon) {
    icon.addEventListener('click', function () {
      document.querySelectorAll('.notification__wrapper').forEach(function (wrapper) {
        wrapper.classList.toggle('notification__wrapper__active');
      });
    });
  });

  // collapsible sidebar
  document.querySelectorAll('.collapse__sidebar__btn, .close__sidebar').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.sidebar').forEach(function (sidebar) {
        sidebar.classList.toggle('sidebar__active');
      });
    });
  });

  // add card tab
  var cardTabs = document.querySelectorAll('.card-tab-wrp');
  cardTabs.forEach(function (tab) {
    tab.style.display = 'none';
  });
  if (cardTabs.length > 0) {
    cardTabs[cardTabs.length - 1].style.display = 'block';
  }

  document.querySelectorAll('.card-tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.card-tab-btn').forEach(function (b) {
        b.classList.remove('card-tab-btn-active');
      });
      this.classList.add('card-tab-btn-active');

      cardTabs.forEach(function (tab) {
        tab.style.display = 'none';
      });

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.style.display = 'block';
      }
    });
  });

  // account tab
  const accountContents = document.querySelectorAll('.account-content');
  accountContents.forEach(function (content, index) {
    content.style.display = index === 0 ? 'block' : 'none';
  });

  document.querySelectorAll('.account-info__btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.account-info__btn').forEach(function (b) {
        b.classList.remove('account-info__btn-active');
      });
      this.classList.add('account-info__btn-active');

      accountContents.forEach(function (content) {
        content.style.display = 'none';
      });

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.style.display = 'block';
      }
    });
  });

  // Scroll Bottom To Top
  const scrollToTopBtn = document.querySelector('.scrollToTop');
  window.addEventListener('scroll', function () {
    if (window.scrollY < 500) {
      scrollToTopBtn.classList.remove('active');
    } else {
      scrollToTopBtn.classList.add('active');
    }
  });

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}); 

















































// if (typeof jQuery === 'undefined') {
//   console.error('jQuery is not loaded');
// } else {
//   console.log('jQuery is loaded');
// }

// /* ==============
//  ========= Js Documentation =========

//  Template Name: Revest
//  Version: 1.0
//  Description: Real Estate Investment For Everyone
//  Author: Pixelaxis
//  Author URI: https://themeforest.net/user/pixelaxis

//     =========================

//      01. data background
//      ---------------------------
//      02. animated hamburger menu
//      ---------------------------
//      03. position navbar on scroll and resize
//      ---------------------------
//      04. job details tab
//      ---------------------------
//      05. property list and grid tabs
//      ---------------------------
//      06. faq tab
//      ---------------------------
//      07. property list and grid two
//      ---------------------------
//      08. Scroll Bottom To Top

//     =========================
// ============== */

// (function ($) {
//   "use strict";

//   jQuery(document).ready(function () {
//     // data background
//     $("[data-background]").each(function () {
//       $(this).css(
//         "background-image",
//         "url(" + $(this).attr("data-background") + ")"
//       );
//     });

//     // animated hamburger icon
//     $(".navbar-toggler").on("click", function () {
//       $(this).toggleClass("toggle-active");
//       $(".navbar").toggleClass("navbar__active");
//     });

//     // position navbar on scroll and resize
//     $(window).on("scroll", function (e) {
//       var scroll = $(window).scrollTop();
//       if ((scroll > 10) | (scroll == 10)) {
//         $(".header").addClass("header__active");
//         $(".dashboard-header").addClass("dashboard-header__active");
//       } else {
//         $(".header").removeClass("header__active");
//         $(".dashboard-header").removeClass("dashboard-header__active");
//       }
//     });

//     $(window).resize(function () {
//       if ($(".dropdown-menu").hasClass("show")) {
//         $(".dropdown-menu").removeClass("show");
//         $(".dropdown-toggle").removeClass("show");
//       }

//       if ($(".alt__loan__grid").hasClass("col-12 alt__loan__list")) {
//         $(".alt__loan__grid")
//           .removeClass("col-12 alt__loan__list")
//           .addClass("col-md-6 col-xl-4");
//       }
//       $(".notification__wrapper").removeClass("notification__wrapper__active");
//       $(".sidebar").removeClass("sidebar__active");
//     });

//     // job details tab
//     $(".position__details__content").hide();
//     $(".position__details__content:first").show();
//     $(".job__application__btn").on("click", function () {
//       $(".job__application__btn").addClass("button--secondary");
//       $(this).removeClass("button--secondary");
//       $(".position__details__content").hide();
//       var activeTransaction = $(this).attr("href");
//       $(activeTransaction).fadeIn(100);
//       return false;
//     });

//     // property list and grid tabs
//     $(".grid__view").on("click", function () {
//       $(".property__grid__area__wrapper__inner").addClass(
//         "col-xl-4 col-md-6",
//         400
//       );
//       $(".property__grid__area__wrapper__inner__two").removeClass("col-xl-5");
//       $(".property__grid__area__wrapper__inner__three").removeClass("col-xl-7");
//       $(".property__list__wrapper").addClass("property__grid");
//     });

//     $(".grid__list").on("click", function () {
//       $(".property__grid__area__wrapper__inner").removeClass(
//         "col-xl-4 col-md-6",
//         400
//       );
//       $(".property__grid__area__wrapper__inner__two").addClass("col-xl-5");
//       $(".property__grid__area__wrapper__inner__three").addClass("col-xl-7");
//       $(".property__list__wrapper").removeClass("property__grid");
//     });

//     $(".grid__btn").on("click", function () {
//       $(".grid__btn").removeClass("grid__btn__active");
//       $(this).addClass("grid__btn__active");
//     });

//     // faq tab
//     $(".faq__tab__content").hide();
//     $(".faq__tab__content:first").show();
//     $(".faq__tab__btn").on("click", function () {
//       $(".faq__tab__btn").removeClass("faq__tab__btn__active");
//       $(this).addClass("faq__tab__btn__active");
//       $(".faq__tab__content").hide();
//       var activeTransactionf = $(this).attr("href");
//       $(activeTransactionf).fadeIn(100);
//       return false;
//     });

//     // property list and grid two
//     $(".grid__vieww").on("click", function () {
//       $(".alt__loan__grid").addClass("col-xl-4 col-md-6", 400);
//       $(".alt__loan__grid").removeClass("col-12 alt__loan__list");
//     });

//     $(".grid__listt").on("click", function () {
//       $(".alt__loan__grid").removeClass("col-xl-4 col-md-6", 400);
//       $(".alt__loan__grid").addClass("col-12 alt__loan__list");
//     });

//     $(".grid__btnn").on("click", function () {
//       $(".grid__btnn").removeClass("grid__btnn__active");
//       $(this).addClass("grid__btnn__active");
//     });

//     // notifcation popup
//     $(".notification__icon").on("click", function () {
//       $(".notification__wrapper").toggleClass("notification__wrapper__active");
//     });

//     // collapsible sidebar
//     $(".collapse__sidebar__btn").click(function () {
//       $(".sidebar").toggleClass("sidebar__active");
//     });

//     // collapsible sidebar
//     $(".close__sidebar").click(function () {
//       $(".sidebar").toggleClass("sidebar__active");
//     });

//     // add card tab
//     $(".card-tab-wrp").hide();
//     $(".card-tab-wrp:last").show();
//     $(".card-tab-btn").on("click", function () {
//       $(".card-tab-btn").removeClass("card-tab-btn-active");
//       $(this).addClass("card-tab-btn-active");
//       $(".card-tab-wrp").hide();
//       var activeCard = $(this).attr("href");
//       $(activeCard).fadeIn(100);
//       return false;
//     });

//     // account tab
//     $(".account-content").hide();
//     $(".account-content:first").show();
//     $(".account-info__btn").on("click", function () {
//       $(".account-info__btn").removeClass("account-info__btn-active");
//       $(this).addClass("account-info__btn-active");
//       $(".account-content").hide();
//       var activeAccount = $(this).attr("href");
//       $(activeAccount).fadeIn(100);
//       return false;
//     });


//     // Scroll Bottom To Top
//     var ScrollTop = $(".scrollToTop");
//     $(window).on("scroll", function () {
//       if ($(this).scrollTop() < 500) {
//         ScrollTop.removeClass("active");
//       } else {
//         ScrollTop.addClass("active");
//       }
//     });

//     $(".scrollToTop").on("click", function () {
//       $("html, body").animate(
//         {
//           scrollTop: 0,
//         },
//         500
//       );
//       return false;
//     });
//   });
// })(jQuery);

// // onclick outside hide notification
// $(document).on("click", function (e) {
//   if ($(e.target).closest(".notification-area").length === 0) {
//     $(".notification__wrapper").removeClass("notification__wrapper__active");
//   }
//   if ($(e.target).closest(".sidebar, .collapse__sidebar__btn").length === 0) {
//     $(".sidebar").removeClass("sidebar__active");
//   }
// });
