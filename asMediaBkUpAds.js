// First Top Ads Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {

  // ✅ আপনার সব অ্যাডের লিংক ও ছবি এখানে লিস্ট হিসেবে রাখা হলো
  const ads = [
    {
      link: "https://www.newspaperreports.com",  // অ্যাড ১ এর লিংক
      image: "https://i.pinimg.com/736x/f8/61/7b/f8617b8085036801761871c5e06ec8d0.jpg",  // অ্যাড ১ এর ছবি
      alt: "Google Creative Ads"  // অ্যাড ১ এর টেক্সট
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/42/61/98/426198ab9c390244af01cf832048dad7.jpg",
      alt: "Islamic Car"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/10/92/63/109263e75df4e570aa6c66f04331a3b5.jpg",
      alt: "Al Modia"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/e7/e8/cb/e7e8cbae03801eb822eca0a9ef1fda09.jpg",
      alt: "Shopping"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.chzbgr.com/full/9484522496/hF09ECBEF/basketball-wizards-moras-13-de",
      alt: "Sports"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://24.media.tumblr.com/tumblr_mc0kbw3y6S1qedb29o1_500.gif",
      alt: "Politics"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://cdn.dribbble.com/userupload/19691705/file/original-5e7773897b10c56fa73864467ff79ed7.gif",
      alt: "Business"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/0f/c3/d2/0fc3d27eab72ff96e33a996bea6d1f6b.jpg",
      alt: "Banking"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/2c/ec/8d/2cec8d67f07779a8e34b8f63186de062.jpg",
      alt: "Shopping"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://steamuserimages-a.akamaihd.net/ugc/916925691254943202/89CC7CC0689D553C785B9EE9E3D5062BCB8371E6/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      alt: "Car"
    }
  ];

  const adContainer = document.getElementById("asTpBackup_ads");

  let lastIndex = -1; // ✅ পূর্বে দেখা অ্যাডের index (-1 মানে এখনো কিছু দেখা হয়নি)
  let firstShown = false; // ✅ প্রথম অ্যাড দেখানো হয়েছে কিনা, এটা চেক করবো

  function showAd() {
    if (!adContainer || ads.length === 0) return;

    let ad;

    if (!firstShown) {
      // ✅ প্রথমবার — ads[0] দেখাও
      ad = ads[0];
      lastIndex = 0; // ✅ সেট করি যেন পরবর্তীতে এটি সাথে তুলনা করা যায়
      firstShown = true;
    } else {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * ads.length); // ✅ ০ সহ সব ইন্ডেক্স রেনডম
      } while (randomIndex === lastIndex && ads.length > 1); // ✅ যেন একই অ্যাড বারবার না আসে
      lastIndex = randomIndex;
      ad = ads[randomIndex];
    }

    // ✅ অ্যাড কনটেইনারে HTML বসানো হচ্ছে
    adContainer.innerHTML = `
      <a href="${ad.link}" target="_blank" rel="noopener">
        <img src="${ad.image}" loading="lazy" alt="${ad.alt}" style="max-width:100%;"/>
      </a>
    `;
  }

  // ✅ ৩ সেকেন্ড পর চেক করা হবে গুগল অ্যাড লোড হয়েছে কিনা
  setTimeout(function () {
    if (adContainer && adContainer.offsetHeight === 0) {
      showAd(); // ✅ প্রথম অ্যাড দেখাও
      setInterval(showAd, 15000); // ✅ এরপর প্রতি ১৫ সেকেন্ডে নতুন অ্যাড দেখাও
    }
  }, 3000);
});

// Second Post Ads Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {

  // ✅ আপনার সব অ্যাডের লিংক ও ছবি এখানে লিস্ট হিসেবে রাখা হলো
  const ads = [
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/01/44/71/014471c2a1c6b6617e5fa3c5c5ca6009.jpg",
      alt: "Ad One"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPwaUXWX4MOKuXezfNHQAIbjLvK7lCpfbhaRGc_BLc8Lz1zgo5_jKqZqNlcnvI9B7htFOF2HjSDFtLxASxEom76ee8180D8jGWq6ErnnsgpFhYRMXR3pk73ETgtqmnfX0BtIp_6TLRIqoEwlS6ebs8zcnpmz4gtPqzOk-q2UMv41KOE6nM5gtFjwRctQiu/s1600/shopping-discount-30%25.jpg",
      alt: "Shopping Discount Global Challenge"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
      alt: "Ad Three"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/41/d6/77/41d6778e52975bff9c519bcaba3e96a2.jpg",
      alt: "Ad Four"
    }
  ];

  const adContainer = document.getElementById("asPtBackup_ads");

  let lastIndex = -1; // ✅ পূর্বে দেখা অ্যাডের index (-1 মানে এখনো কিছু দেখা হয়নি)
  let firstShown = false; // ✅ প্রথম অ্যাড দেখানো হয়েছে কিনা, এটা চেক করবো

  function showAd() {
    if (!adContainer || ads.length === 0) return;

    let ad;

    if (!firstShown) {
      // ✅ প্রথমবার — ads[0] দেখাও
      ad = ads[0];
      lastIndex = 0; // ✅ সেট করি যেন পরবর্তীতে এটি সাথে তুলনা করা যায়
      firstShown = true;
    } else {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * ads.length); // ✅ ০ সহ সব ইন্ডেক্স রেনডম
      } while (randomIndex === lastIndex && ads.length > 1); // ✅ যেন একই অ্যাড বারবার না আসে
      lastIndex = randomIndex;
      ad = ads[randomIndex];
    }

    // ✅ অ্যাড কনটেইনারে HTML বসানো হচ্ছে
    adContainer.innerHTML = `
      <a href="${ad.link}" target="_blank" rel="noopener">
        <img src="${ad.image}" loading="lazy" alt="${ad.alt}" style="max-width:100%;"/>
      </a>
    `;
  }

  // ✅ ৩ সেকেন্ড পর চেক করা হবে গুগল অ্যাড লোড হয়েছে কিনা
  setTimeout(function () {
    if (adContainer && adContainer.offsetHeight === 0) {
      showAd(); // ✅ প্রথম অ্যাড দেখাও
      setInterval(showAd, 15000); // ✅ এরপর প্রতি ১৫ সেকেন্ডে নতুন অ্যাড দেখাও
    }
  }, 3000);
});


// 3d For You Ads Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {

  // ✅ আপনার সব অ্যাডের লিংক ও ছবি এখানে লিস্ট হিসেবে রাখা হলো
  const ads = [
    {
      link: "https://www.newspaperreports.com",  // অ্যাড ১ এর লিংক
      image: "https://i.pinimg.com/736x/01/44/71/014471c2a1c6b6617e5fa3c5c5ca6009.jpg",  // অ্যাড ১ এর ছবি
      alt: "Ad One"  // অ্যাড ১ এর টেক্সট
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5uqIH9PKP52VDw47ue8iDavZC1CFeXCgSIZboDz0KWLyM9RFS47bqRyJcK-DYb8_uVOu1ewPMpwob54itd2JHVK9ve_TQ-d5tMYI2AapG5ZKLeGiHiDduhKo9s66iV3nLDrDBzJ2f90LWc5U3nhHbqCDKoPMtAKB0bbytmLM2lEkyy-bdsM5yngRYvoNY/s16000/npr_ads.gif",
      alt: "Ad Two"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
      alt: "Ad Three"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/41/d6/77/41d6778e52975bff9c519bcaba3e96a2.jpg",
      alt: "Ad Four"
    }
  ];

  const adContainer = document.getElementById("asFYBackup_ads");

  let lastIndex = -1; // ✅ পূর্বে দেখা অ্যাডের index (-1 মানে এখনো কিছু দেখা হয়নি)
  let firstShown = false; // ✅ প্রথম অ্যাড দেখানো হয়েছে কিনা, এটা চেক করবো

  function showAd() {
    if (!adContainer || ads.length === 0) return;

    let ad;

    if (!firstShown) {
      // ✅ প্রথমবার — ads[0] দেখাও
      ad = ads[0];
      lastIndex = 0; // ✅ সেট করি যেন পরবর্তীতে এটি সাথে তুলনা করা যায়
      firstShown = true;
    } else {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * ads.length); // ✅ ০ সহ সব ইন্ডেক্স রেনডম
      } while (randomIndex === lastIndex && ads.length > 1); // ✅ যেন একই অ্যাড বারবার না আসে
      lastIndex = randomIndex;
      ad = ads[randomIndex];
    }

    // ✅ অ্যাড কনটেইনারে HTML বসানো হচ্ছে
    adContainer.innerHTML = `
      <a href="${ad.link}" target="_blank" rel="noopener">
        <img src="${ad.image}" loading="lazy" alt="${ad.alt}" style="max-width:100%;"/>
      </a>
    `;
  }

  // ✅ ৩ সেকেন্ড পর চেক করা হবে গুগল অ্যাড লোড হয়েছে কিনা
  setTimeout(function () {
    if (adContainer && adContainer.offsetHeight === 0) {
      showAd(); // ✅ প্রথম অ্যাড দেখাও
      setInterval(showAd, 15000); // ✅ এরপর প্রতি ১৫ সেকেন্ডে নতুন অ্যাড দেখাও
    }
  }, 3000);
});


// Four Best Deal Ads Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {

  // ✅ আপনার সব অ্যাডের লিংক ও ছবি এখানে লিস্ট হিসেবে রাখা হলো
  const ads = [
    {
      link: "https://www.newspaperreports.com",  // অ্যাড ১ এর লিংক
      image: "https://i.pinimg.com/736x/01/44/71/014471c2a1c6b6617e5fa3c5c5ca6009.jpg",  // অ্যাড ১ এর ছবি
      alt: "Ad One"  // অ্যাড ১ এর টেক্সট
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5uqIH9PKP52VDw47ue8iDavZC1CFeXCgSIZboDz0KWLyM9RFS47bqRyJcK-DYb8_uVOu1ewPMpwob54itd2JHVK9ve_TQ-d5tMYI2AapG5ZKLeGiHiDduhKo9s66iV3nLDrDBzJ2f90LWc5U3nhHbqCDKoPMtAKB0bbytmLM2lEkyy-bdsM5yngRYvoNY/s16000/npr_ads.gif",
      alt: "Ad Two"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
      alt: "Ad Three"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/41/d6/77/41d6778e52975bff9c519bcaba3e96a2.jpg",
      alt: "Ad Four"
    }
  ];

  const adContainer = document.getElementById("asBDBackup_ads");

  let lastIndex = -1; // ✅ পূর্বে দেখা অ্যাডের index (-1 মানে এখনো কিছু দেখা হয়নি)
  let firstShown = false; // ✅ প্রথম অ্যাড দেখানো হয়েছে কিনা, এটা চেক করবো

  function showAd() {
    if (!adContainer || ads.length === 0) return;

    let ad;

    if (!firstShown) {
      // ✅ প্রথমবার — ads[0] দেখাও
      ad = ads[0];
      lastIndex = 0; // ✅ সেট করি যেন পরবর্তীতে এটি সাথে তুলনা করা যায়
      firstShown = true;
    } else {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * ads.length); // ✅ ০ সহ সব ইন্ডেক্স রেনডম
      } while (randomIndex === lastIndex && ads.length > 1); // ✅ যেন একই অ্যাড বারবার না আসে
      lastIndex = randomIndex;
      ad = ads[randomIndex];
    }

    // ✅ অ্যাড কনটেইনারে HTML বসানো হচ্ছে
    adContainer.innerHTML = `
      <a href="${ad.link}" target="_blank" rel="noopener">
        <img src="${ad.image}" loading="lazy" alt="${ad.alt}" style="max-width:100%;"/>
      </a>
    `;
  }

  // ✅ ৩ সেকেন্ড পর চেক করা হবে গুগল অ্যাড লোড হয়েছে কিনা
  setTimeout(function () {
    if (adContainer && adContainer.offsetHeight === 0) {
      showAd(); // ✅ প্রথম অ্যাড দেখাও
      setInterval(showAd, 15000); // ✅ এরপর প্রতি ১৫ সেকেন্ডে নতুন অ্যাড দেখাও
    }
  }, 3000);
});


// Five Discover Ads Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {

  // ✅ আপনার সব অ্যাডের লিংক ও ছবি এখানে লিস্ট হিসেবে রাখা হলো
  const ads = [
    {
      link: "https://www.newspaperreports.com",  // অ্যাড ১ এর লিংক
      image: "https://i.pinimg.com/736x/01/44/71/014471c2a1c6b6617e5fa3c5c5ca6009.jpg",  // অ্যাড ১ এর ছবি
      alt: "Ad One"  // অ্যাড ১ এর টেক্সট
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5uqIH9PKP52VDw47ue8iDavZC1CFeXCgSIZboDz0KWLyM9RFS47bqRyJcK-DYb8_uVOu1ewPMpwob54itd2JHVK9ve_TQ-d5tMYI2AapG5ZKLeGiHiDduhKo9s66iV3nLDrDBzJ2f90LWc5U3nhHbqCDKoPMtAKB0bbytmLM2lEkyy-bdsM5yngRYvoNY/s16000/npr_ads.gif",
      alt: "Ad Two"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
      alt: "Ad Three"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/41/d6/77/41d6778e52975bff9c519bcaba3e96a2.jpg",
      alt: "Ad Four"
    }
  ];

  const adContainer = document.getElementById("asDcBackup_ads");

  let lastIndex = -1; // ✅ পূর্বে দেখা অ্যাডের index (-1 মানে এখনো কিছু দেখা হয়নি)
  let firstShown = false; // ✅ প্রথম অ্যাড দেখানো হয়েছে কিনা, এটা চেক করবো

  function showAd() {
    if (!adContainer || ads.length === 0) return;

    let ad;

    if (!firstShown) {
      // ✅ প্রথমবার — ads[0] দেখাও
      ad = ads[0];
      lastIndex = 0; // ✅ সেট করি যেন পরবর্তীতে এটি সাথে তুলনা করা যায়
      firstShown = true;
    } else {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * ads.length); // ✅ ০ সহ সব ইন্ডেক্স রেনডম
      } while (randomIndex === lastIndex && ads.length > 1); // ✅ যেন একই অ্যাড বারবার না আসে
      lastIndex = randomIndex;
      ad = ads[randomIndex];
    }

    // ✅ অ্যাড কনটেইনারে HTML বসানো হচ্ছে
    adContainer.innerHTML = `
      <a href="${ad.link}" target="_blank" rel="noopener">
        <img src="${ad.image}" loading="lazy" alt="${ad.alt}" style="max-width:100%;"/>
      </a>
    `;
  }

  // ✅ ৩ সেকেন্ড পর চেক করা হবে গুগল অ্যাড লোড হয়েছে কিনা
  setTimeout(function () {
    if (adContainer && adContainer.offsetHeight === 0) {
      showAd(); // ✅ প্রথম অ্যাড দেখাও
      setInterval(showAd, 15000); // ✅ এরপর প্রতি ১৫ সেকেন্ডে নতুন অ্যাড দেখাও
    }
  }, 3000);
});


// Six Bundle Ads 1 Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {

  // ✅ আপনার সব অ্যাডের লিংক ও ছবি এখানে লিস্ট হিসেবে রাখা হলো
  const ads = [
    {
      link: "https://www.newspaperreports.com",  // অ্যাড ১ এর লিংক
      image: "https://i.pinimg.com/736x/01/44/71/014471c2a1c6b6617e5fa3c5c5ca6009.jpg",  // অ্যাড ১ এর ছবি
      alt: "Ad One"  // অ্যাড ১ এর টেক্সট
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5uqIH9PKP52VDw47ue8iDavZC1CFeXCgSIZboDz0KWLyM9RFS47bqRyJcK-DYb8_uVOu1ewPMpwob54itd2JHVK9ve_TQ-d5tMYI2AapG5ZKLeGiHiDduhKo9s66iV3nLDrDBzJ2f90LWc5U3nhHbqCDKoPMtAKB0bbytmLM2lEkyy-bdsM5yngRYvoNY/s16000/npr_ads.gif",
      alt: "Ad Two"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
      alt: "Ad Three"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/41/d6/77/41d6778e52975bff9c519bcaba3e96a2.jpg",
      alt: "Ad Four"
    }
  ];

  const adContainer = document.getElementById("asBndBackup_ads_1");

  let lastIndex = -1; // ✅ পূর্বে দেখা অ্যাডের index (-1 মানে এখনো কিছু দেখা হয়নি)
  let firstShown = false; // ✅ প্রথম অ্যাড দেখানো হয়েছে কিনা, এটা চেক করবো

  function showAd() {
    if (!adContainer || ads.length === 0) return;

    let ad;

    if (!firstShown) {
      // ✅ প্রথমবার — ads[0] দেখাও
      ad = ads[0];
      lastIndex = 0; // ✅ সেট করি যেন পরবর্তীতে এটি সাথে তুলনা করা যায়
      firstShown = true;
    } else {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * ads.length); // ✅ ০ সহ সব ইন্ডেক্স রেনডম
      } while (randomIndex === lastIndex && ads.length > 1); // ✅ যেন একই অ্যাড বারবার না আসে
      lastIndex = randomIndex;
      ad = ads[randomIndex];
    }

    // ✅ অ্যাড কনটেইনারে HTML বসানো হচ্ছে
    adContainer.innerHTML = `
      <a href="${ad.link}" target="_blank" rel="noopener">
        <img src="${ad.image}" loading="lazy" alt="${ad.alt}" style="max-width:100%;"/>
      </a>
    `;
  }

  // ✅ ৩ সেকেন্ড পর চেক করা হবে গুগল অ্যাড লোড হয়েছে কিনা
  setTimeout(function () {
    if (adContainer && adContainer.offsetHeight === 0) {
      showAd(); // ✅ প্রথম অ্যাড দেখাও
      setInterval(showAd, 15000); // ✅ এরপর প্রতি ১৫ সেকেন্ডে নতুন অ্যাড দেখাও
    }
  }, 3000);
});


// Seven Bundle Ads 2 Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {

  // ✅ আপনার সব অ্যাডের লিংক ও ছবি এখানে লিস্ট হিসেবে রাখা হলো
  const ads = [
    {
      link: "https://www.newspaperreports.com",  // অ্যাড ১ এর লিংক
      image: "https://i.pinimg.com/736x/01/44/71/014471c2a1c6b6617e5fa3c5c5ca6009.jpg",  // অ্যাড ১ এর ছবি
      alt: "Ad One"  // অ্যাড ১ এর টেক্সট
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5uqIH9PKP52VDw47ue8iDavZC1CFeXCgSIZboDz0KWLyM9RFS47bqRyJcK-DYb8_uVOu1ewPMpwob54itd2JHVK9ve_TQ-d5tMYI2AapG5ZKLeGiHiDduhKo9s66iV3nLDrDBzJ2f90LWc5U3nhHbqCDKoPMtAKB0bbytmLM2lEkyy-bdsM5yngRYvoNY/s16000/npr_ads.gif",
      alt: "Ad Two"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
      alt: "Ad Three"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/41/d6/77/41d6778e52975bff9c519bcaba3e96a2.jpg",
      alt: "Ad Four"
    }
  ];

  const adContainer = document.getElementById("asBndBackup_ads_2");

  let lastIndex = -1; // ✅ পূর্বে দেখা অ্যাডের index (-1 মানে এখনো কিছু দেখা হয়নি)
  let firstShown = false; // ✅ প্রথম অ্যাড দেখানো হয়েছে কিনা, এটা চেক করবো

  function showAd() {
    if (!adContainer || ads.length === 0) return;

    let ad;

    if (!firstShown) {
      // ✅ প্রথমবার — ads[0] দেখাও
      ad = ads[0];
      lastIndex = 0; // ✅ সেট করি যেন পরবর্তীতে এটি সাথে তুলনা করা যায়
      firstShown = true;
    } else {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * ads.length); // ✅ ০ সহ সব ইন্ডেক্স রেনডম
      } while (randomIndex === lastIndex && ads.length > 1); // ✅ যেন একই অ্যাড বারবার না আসে
      lastIndex = randomIndex;
      ad = ads[randomIndex];
    }

    // ✅ অ্যাড কনটেইনারে HTML বসানো হচ্ছে
    adContainer.innerHTML = `
      <a href="${ad.link}" target="_blank" rel="noopener">
        <img src="${ad.image}" loading="lazy" alt="${ad.alt}" style="max-width:100%;"/>
      </a>
    `;
  }

  // ✅ ৩ সেকেন্ড পর চেক করা হবে গুগল অ্যাড লোড হয়েছে কিনা
  setTimeout(function () {
    if (adContainer && adContainer.offsetHeight === 0) {
      showAd(); // ✅ প্রথম অ্যাড দেখাও
      setInterval(showAd, 15000); // ✅ এরপর প্রতি ১৫ সেকেন্ডে নতুন অ্যাড দেখাও
    }
  }, 3000);
});


// Eight Bundle Ads 3 Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {

  // ✅ আপনার সব অ্যাডের লিংক ও ছবি এখানে লিস্ট হিসেবে রাখা হলো
  const ads = [
    {
      link: "https://www.newspaperreports.com",  // অ্যাড ১ এর লিংক
      image: "https://i.pinimg.com/736x/01/44/71/014471c2a1c6b6617e5fa3c5c5ca6009.jpg",  // অ্যাড ১ এর ছবি
      alt: "Ad One"  // অ্যাড ১ এর টেক্সট
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5uqIH9PKP52VDw47ue8iDavZC1CFeXCgSIZboDz0KWLyM9RFS47bqRyJcK-DYb8_uVOu1ewPMpwob54itd2JHVK9ve_TQ-d5tMYI2AapG5ZKLeGiHiDduhKo9s66iV3nLDrDBzJ2f90LWc5U3nhHbqCDKoPMtAKB0bbytmLM2lEkyy-bdsM5yngRYvoNY/s16000/npr_ads.gif",
      alt: "Ad Two"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
      alt: "Ad Three"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/41/d6/77/41d6778e52975bff9c519bcaba3e96a2.jpg",
      alt: "Ad Four"
    }
  ];

  const adContainer = document.getElementById("asBndBackup_ads_3");

  let lastIndex = -1; // ✅ পূর্বে দেখা অ্যাডের index (-1 মানে এখনো কিছু দেখা হয়নি)
  let firstShown = false; // ✅ প্রথম অ্যাড দেখানো হয়েছে কিনা, এটা চেক করবো

  function showAd() {
    if (!adContainer || ads.length === 0) return;

    let ad;

    if (!firstShown) {
      // ✅ প্রথমবার — ads[0] দেখাও
      ad = ads[0];
      lastIndex = 0; // ✅ সেট করি যেন পরবর্তীতে এটি সাথে তুলনা করা যায়
      firstShown = true;
    } else {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * ads.length); // ✅ ০ সহ সব ইন্ডেক্স রেনডম
      } while (randomIndex === lastIndex && ads.length > 1); // ✅ যেন একই অ্যাড বারবার না আসে
      lastIndex = randomIndex;
      ad = ads[randomIndex];
    }

    // ✅ অ্যাড কনটেইনারে HTML বসানো হচ্ছে
    adContainer.innerHTML = `
      <a href="${ad.link}" target="_blank" rel="noopener">
        <img src="${ad.image}" loading="lazy" alt="${ad.alt}" style="max-width:100%;"/>
      </a>
    `;
  }

  // ✅ ৩ সেকেন্ড পর চেক করা হবে গুগল অ্যাড লোড হয়েছে কিনা
  setTimeout(function () {
    if (adContainer && adContainer.offsetHeight === 0) {
      showAd(); // ✅ প্রথম অ্যাড দেখাও
      setInterval(showAd, 15000); // ✅ এরপর প্রতি ১৫ সেকেন্ডে নতুন অ্যাড দেখাও
    }
  }, 3000);
});


// Nine Bundle Ads 4 Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {

  // ✅ আপনার সব অ্যাডের লিংক ও ছবি এখানে লিস্ট হিসেবে রাখা হলো
  const ads = [
    {
      link: "https://www.newspaperreports.com",  // অ্যাড ১ এর লিংক
      image: "https://i.pinimg.com/736x/01/44/71/014471c2a1c6b6617e5fa3c5c5ca6009.jpg",  // অ্যাড ১ এর ছবি
      alt: "Ad One"  // অ্যাড ১ এর টেক্সট
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5uqIH9PKP52VDw47ue8iDavZC1CFeXCgSIZboDz0KWLyM9RFS47bqRyJcK-DYb8_uVOu1ewPMpwob54itd2JHVK9ve_TQ-d5tMYI2AapG5ZKLeGiHiDduhKo9s66iV3nLDrDBzJ2f90LWc5U3nhHbqCDKoPMtAKB0bbytmLM2lEkyy-bdsM5yngRYvoNY/s16000/npr_ads.gif",
      alt: "Ad Two"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
      alt: "Ad Three"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/41/d6/77/41d6778e52975bff9c519bcaba3e96a2.jpg",
      alt: "Ad Four"
    }
  ];

  const adContainer = document.getElementById("asBndBackup_ads_4");

  let lastIndex = -1; // ✅ পূর্বে দেখা অ্যাডের index (-1 মানে এখনো কিছু দেখা হয়নি)
  let firstShown = false; // ✅ প্রথম অ্যাড দেখানো হয়েছে কিনা, এটা চেক করবো

  function showAd() {
    if (!adContainer || ads.length === 0) return;

    let ad;

    if (!firstShown) {
      // ✅ প্রথমবার — ads[0] দেখাও
      ad = ads[0];
      lastIndex = 0; // ✅ সেট করি যেন পরবর্তীতে এটি সাথে তুলনা করা যায়
      firstShown = true;
    } else {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * ads.length); // ✅ ০ সহ সব ইন্ডেক্স রেনডম
      } while (randomIndex === lastIndex && ads.length > 1); // ✅ যেন একই অ্যাড বারবার না আসে
      lastIndex = randomIndex;
      ad = ads[randomIndex];
    }

    // ✅ অ্যাড কনটেইনারে HTML বসানো হচ্ছে
    adContainer.innerHTML = `
      <a href="${ad.link}" target="_blank" rel="noopener">
        <img src="${ad.image}" loading="lazy" alt="${ad.alt}" style="max-width:100%;"/>
      </a>
    `;
  }

  // ✅ ৩ সেকেন্ড পর চেক করা হবে গুগল অ্যাড লোড হয়েছে কিনা
  setTimeout(function () {
    if (adContainer && adContainer.offsetHeight === 0) {
      showAd(); // ✅ প্রথম অ্যাড দেখাও
      setInterval(showAd, 15000); // ✅ এরপর প্রতি ১৫ সেকেন্ডে নতুন অ্যাড দেখাও
    }
  }, 3000);
});


// Ten More Story Ads Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {

  // ✅ আপনার সব অ্যাডের লিংক ও ছবি এখানে লিস্ট হিসেবে রাখা হলো
  const ads = [
    {
      link: "https://www.newspaperreports.com",  // অ্যাড ১ এর লিংক
      image: "https://i.pinimg.com/736x/01/44/71/014471c2a1c6b6617e5fa3c5c5ca6009.jpg",  // অ্যাড ১ এর ছবি
      alt: "Ad One"  // অ্যাড ১ এর টেক্সট
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5uqIH9PKP52VDw47ue8iDavZC1CFeXCgSIZboDz0KWLyM9RFS47bqRyJcK-DYb8_uVOu1ewPMpwob54itd2JHVK9ve_TQ-d5tMYI2AapG5ZKLeGiHiDduhKo9s66iV3nLDrDBzJ2f90LWc5U3nhHbqCDKoPMtAKB0bbytmLM2lEkyy-bdsM5yngRYvoNY/s16000/npr_ads.gif",
      alt: "Ad Two"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
      alt: "Ad Three"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/41/d6/77/41d6778e52975bff9c519bcaba3e96a2.jpg",
      alt: "Ad Four"
    }
  ];

  const adContainer = document.getElementById("asMSBackup_ads");

  let lastIndex = -1; // ✅ পূর্বে দেখা অ্যাডের index (-1 মানে এখনো কিছু দেখা হয়নি)
  let firstShown = false; // ✅ প্রথম অ্যাড দেখানো হয়েছে কিনা, এটা চেক করবো

  function showAd() {
    if (!adContainer || ads.length === 0) return;

    let ad;

    if (!firstShown) {
      // ✅ প্রথমবার — ads[0] দেখাও
      ad = ads[0];
      lastIndex = 0; // ✅ সেট করি যেন পরবর্তীতে এটি সাথে তুলনা করা যায়
      firstShown = true;
    } else {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * ads.length); // ✅ ০ সহ সব ইন্ডেক্স রেনডম
      } while (randomIndex === lastIndex && ads.length > 1); // ✅ যেন একই অ্যাড বারবার না আসে
      lastIndex = randomIndex;
      ad = ads[randomIndex];
    }

    // ✅ অ্যাড কনটেইনারে HTML বসানো হচ্ছে
    adContainer.innerHTML = `
      <a href="${ad.link}" target="_blank" rel="noopener">
        <img src="${ad.image}" loading="lazy" alt="${ad.alt}" style="max-width:100%;"/>
      </a>
    `;
  }

  // ✅ ৩ সেকেন্ড পর চেক করা হবে গুগল অ্যাড লোড হয়েছে কিনা
  setTimeout(function () {
    if (adContainer && adContainer.offsetHeight === 0) {
      showAd(); // ✅ প্রথম অ্যাড দেখাও
      setInterval(showAd, 15000); // ✅ এরপর প্রতি ১৫ সেকেন্ডে নতুন অ্যাড দেখাও
    }
  }, 3000);
});

// Eleven End Bottom Ads Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {

  // ✅ আপনার সব অ্যাডের লিংক ও ছবি এখানে লিস্ট হিসেবে রাখা হলো
  const ads = [
    {
      link: "https://www.newspaperreports.com",  // অ্যাড ১ এর লিংক
      image: "https://i.pinimg.com/736x/c3/e1/09/c3e10937bca7c46d789c5c07825045c9.jpg",  // অ্যাড ১ এর ছবি
      alt: "Shopping Watch Ali Express"  // অ্যাড ১ এর টেক্সট
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/75/23/d3/7523d3083e598dcd5e1ba767cb1356bf.jpg",
      alt: "Shopping"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/f0/ed/ef/f0edef7c6ba00b074ab01f3ca3fe3c87.jpg",
      alt: "Life"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/74/f3/00/74f300f715af9eb37668dfbdab2bad30.jpg",
      alt: "Hunda"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/46/ba/f6/46baf69d3efd4e557bf2e417932ba327.jpg",
      alt: "Car"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/8a/6d/b5/8a6db5a792e91424bc1a550338968253.jpg",
      alt: "Science"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/5f/8e/5e/5f8e5e8e21e8586638a5c337a534b6a2.jpg",
      alt: "Ai Chat GPT 4"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/fb/e3/c0/fbe3c0a1bd08af24bee01c87066760ce.jpg",
      alt: "Open Ai"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/d8/aa/04/d8aa046307c495370cb00c2ee4902dc3.jpg",
      alt: "Money"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/e8/c5/c0/e8c5c05bd47fbe964da64ffb2f3bd189.jpg",
      alt: "Online Earning Tricks"
    }
  ];

  const adContainer = document.getElementById("asEndBtmBackup_ads");

  let lastIndex = -1; // ✅ পূর্বে দেখা অ্যাডের index (-1 মানে এখনো কিছু দেখা হয়নি)
  let firstShown = false; // ✅ প্রথম অ্যাড দেখানো হয়েছে কিনা, এটা চেক করবো

  function showAd() {
    if (!adContainer || ads.length === 0) return;

    let ad;

    if (!firstShown) {
      // ✅ প্রথমবার — ads[0] দেখাও
      ad = ads[0];
      lastIndex = 0; // ✅ সেট করি যেন পরবর্তীতে এটি সাথে তুলনা করা যায়
      firstShown = true;
    } else {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * ads.length); // ✅ ০ সহ সব ইন্ডেক্স রেনডম
      } while (randomIndex === lastIndex && ads.length > 1); // ✅ যেন একই অ্যাড বারবার না আসে
      lastIndex = randomIndex;
      ad = ads[randomIndex];
    }

    // ✅ অ্যাড কনটেইনারে HTML বসানো হচ্ছে
    adContainer.innerHTML = `
      <a href="${ad.link}" target="_blank" rel="noopener">
        <img src="${ad.image}" loading="lazy" alt="${ad.alt}" style="max-width:100%;"/>
      </a>
    `;
  }

  // ✅ ৩ সেকেন্ড পর চেক করা হবে গুগল অ্যাড লোড হয়েছে কিনা
  setTimeout(function () {
    if (adContainer && adContainer.offsetHeight === 0) {
      showAd(); // ✅ প্রথম অ্যাড দেখাও
      setInterval(showAd, 15000); // ✅ এরপর প্রতি ১৫ সেকেন্ডে নতুন অ্যাড দেখাও
    }
  }, 3000);
});