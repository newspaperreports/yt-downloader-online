// 🔽 ডাউনলোড বাটনের ক্লিক ইভেন্ট হ্যান্ডলার
document.getElementById('download-btn').addEventListener('click', async function () {
    // 🎯 ইউজার ইনপুট থেকে ইউটিউব URL নেয়া হচ্ছে
    const url = document.getElementById('youtube-url').value;

    // ⚠️ ইনপুট ফাঁকা থাকলে অ্যালার্ট দেখানো হবে
    if (!url) {
        alert('Please enter a YouTube URL');
        return;
    }

    // 🔍 ইউটিউব ভিডিও ID বের করা হচ্ছে (URL থেকে ১১ অক্ষরের ভিডিও আইডি খোঁজা)
    const videoIdMatch = url.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})/);
    if (!videoIdMatch) {
        alert('Invalid YouTube URL');
        return;
    }
    const videoId = videoIdMatch[1];

    // ✅ রেজাল্ট কন্টেইনারটি দেখানো হচ্ছে
    document.getElementById('result-container').style.display = 'block';

    // ⏳ লোডিং মেসেজ ও প্লেসহোল্ডার ইমেজ দেখানো হচ্ছে
    document.getElementById('video-title').innerText = 'Loading...';
    document.getElementById('video-description').innerText = 'Fetching video details...';

    // 🔔 এখানে placeholder image URL ঠিক করেছি, যাতে DNS সমস্যা না হয়
    document.getElementById('video-thumbnail').src = 'https://dummyimage.com/320x180/cccccc/000000.png&text=Loading';

    // 🔄 পুরাতন ভিডিও ইনফো ফিল্ড গুলো রিসেট করা
    document.getElementById('video-views').innerText = '';
    document.getElementById('video-duration').innerText = '';
    document.getElementById('video-publish-date').innerText = '';

    // 🔄 API কল করে ভিডিও তথ্য আনা হচ্ছে
    try {
        const response = await fetch(`https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${videoId}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd189877d33msh319d00e47775cf0p1bc5d9jsn2eb2609c3d60', // ⚠️ এখানে আপনার API কী যুক্ত আছে
                'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
            }
        });

        // ❌ যদি রেসপন্স সঠিক না হয়, এরর থ্রো করা হবে
        if (!response.ok) throw new Error('API request failed');

        // ✅ API থেকে পাওয়া JSON ডেটা নেয়া হচ্ছে
        const data = await response.json();

        console.log(data); // ✅ ডেভেলপার কনসোলে ডেটা দেখা যাবে

        // 📺 UI তে ভিডিওর শিরোনাম, বিবরণ ও থাম্বনেইল বসানো হচ্ছে
        document.getElementById('video-title').innerText = data.title || 'No title found';
        document.getElementById('video-description').innerText = data.description || 'No description available';

        // থাম্বনেইল URL না পেলে placeholder দেখাবে
        document.getElementById('video-thumbnail').src = data.thumbnail || 'https://dummyimage.com/320x180/cccccc/000000.png&text=No+Image';

        // 🕒 ভিডিওর সময়কাল, ভিউ সংখ্যা ও প্রকাশের তারিখ দেখানো হচ্ছে
        document.getElementById('video-views').innerText = data.views ? `Views: ${data.views.toLocaleString()}` : 'Views: No data';
        document.getElementById('video-duration').innerText = data.duration ? `Duration: ${data.duration}` : 'Duration: No data';
        document.getElementById('video-publish-date').innerText = data.publishedAt ? `Published: ${new Date(data.publishedAt).toLocaleDateString()}` : 'Published: No data';

        // 🧹 আগের ফরম্যাট কার্ডগুলো ক্লিয়ার করা হচ্ছে
        const videoFormatsContainer = document.getElementById('video-formats');
        const audioFormatsContainer = document.getElementById('audio-formats');
        videoFormatsContainer.innerHTML = '';
        audioFormatsContainer.innerHTML = '';

        // 🧩 ফরম্যাট ডেটা থেকে ডাইনামিক HTML কার্ড তৈরি করা হচ্ছে
        if (data.formats && data.formats.length > 0) {
            data.formats.forEach(format => {
                const card = document.createElement('div');
                card.classList.add('format-card');

                // 🎞️ ভিডিও ফরম্যাট কার্ড তৈরি
                if (format.mimeType.startsWith('video')) {
                    // ⚠️ নিশ্চিত করুন format.url আসছে একটি স্ট্রিং হিসেবে, অবজেক্ট নয়
                    // console.log('Video format url:', format.url);

                    card.innerHTML = `
                        <div class="format-header">
                            <span class="format-type">${format.qualityLabel || 'Video'}</span>
                            <span class="format-quality">${format.container}</span>
                        </div>
                        <div class="format-details">
                            Bitrate: ${format.bitrate || 'N/A'}<br>
                            FPS: ${format.fps || 'N/A'}
                        </div>
                        <button class="download-btn" onclick="window.open('${format.url}', '_blank')">Download</button>
                    `;
                    videoFormatsContainer.appendChild(card);
                } 
                // 🎧 অডিও ফরম্যাট কার্ড তৈরি
                else if (format.mimeType.startsWith('audio')) {
                    card.innerHTML = `
                        <div class="format-header">
                            <span class="format-type">Audio</span>
                            <span class="format-quality">${format.container}</span>
                        </div>
                        <div class="format-details">
                            Bitrate: ${format.bitrate || 'N/A'}
                        </div>
                        <button class="download-btn" onclick="window.open('${format.url}', '_blank')">Download</button>
                    `;
                    audioFormatsContainer.appendChild(card);
                }
            });
        }

        // 🧭 ডিফল্টভাবে ভিডিও ট্যাব অ্যাক্টিভ করা হচ্ছে
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.tab-btn[data-tab="video"]').classList.add('active');
        document.getElementById('video-formats').style.display = 'grid';
        document.getElementById('audio-formats').style.display = 'none';

    } catch (error) {
        // ❌ কোনো এরর হলে তা কনসোলে দেখানো ও ইউজারকে জানানো হবে
        console.error('Error:', error);
        alert('Failed to fetch video info.');
        document.getElementById('video-title').innerText = 'Error loading video info';
        document.getElementById('video-description').innerText = '';

        // ❌ এরর হলে placeholder ইমেজ দেখানো
        document.getElementById('video-thumbnail').src = 'https://dummyimage.com/320x180/cccccc/ff0000.png&text=Error';

        // 🧹 ভুল ডেটা থাকলে তা মুছে ফেলা হচ্ছে
        document.getElementById('video-views').innerText = '';
        document.getElementById('video-duration').innerText = '';
        document.getElementById('video-publish-date').innerText = '';
        document.getElementById('video-formats').innerHTML = '';
        document.getElementById('audio-formats').innerHTML = '';
    }
});

// 🔁 ভিডিও/অডিও ট্যাব বাটনগুলোর জন্য ট্যাব সুইচ ফাংশনালিটি
const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach(button => {
    button.addEventListener('click', function () {
        // 🔄 সকল বাটন থেকে active ক্লাস সরানো হচ্ছে
        tabButtons.forEach(btn => btn.classList.remove('active'));

        // ✅ ক্লিক করা বাটনকে active করা হচ্ছে
        this.classList.add('active');

        // 👁️ শুধু নির্বাচিত ট্যাব দেখানো হবে
        document.getElementById('video-formats').style.display = 'none';
        document.getElementById('audio-formats').style.display = 'none';

        const tabName = this.getAttribute('data-tab');
        document.getElementById(tabName + '-formats').style.display = 'grid';
    });
});

// 🔁 ক্যাটাগরি বাটনগুলোর জন্য active ক্লাস হ্যান্ডলিং
const categoryButtons = document.querySelectorAll('.category-btn');

categoryButtons.forEach(button => {
    button.addEventListener('click', function () {
        // 🔄 সব ক্যাটাগরি বাটন থেকে active ক্লাস সরানো
        categoryButtons.forEach(btn => btn.classList.remove('active'));

        // ✅ ক্লিক করা ক্যাটাগরিকে active করা
        this.classList.add('active');

        // 🧠 (অপশনাল) এখানে ক্যাটাগরি ফিল্টারিং ফাংশনালিটি যুক্ত করা যেতে পারে
    });
});
