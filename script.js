document.addEventListener("DOMContentLoaded", function() {
    const blogContent = document.getElementById("blogContent");

    const timelineContent = `
        <h4>2006年 - 誕生</h4>
        <p>私は2006年12月18日、大阪府で生まれました。家族に囲まれ、愛情豊かな環境で育ちました。</p>
        
        <h4>2007年 - 水泳を始める</h4>
        <p>1歳で水泳を始め、水の中で自由に動く楽しさを経験しました。</p>
        
        <h4>2011年 - ピアノのレッスン開始</h4>
        <p>5歳の時、ピアノのレッスンを始めました。音楽を通じて表現する喜びを知りました。</p>
        
        <h4>2013年 - 小学校入学</h4>
        <p>大阪私立賢明学院小学校に入学し、今でも繋がりのある友達と出会い、学校生活をスタートしました。</p>
        
        <h4>2018年 - 全国大会での成功</h4>
        <p>水泳で全国大会に出場し、個人競技で上位入賞を果たし、国の認定選手に選ばれました。この経験が、私の自信となりました。</p>
        
        <h4>2019年 - 中学校入学</h4>
        <p>大阪私立賢明学院中学高等学校に内部進学で入学し、新たな環境と共に学校生活をスタートしました。</p>
        
        <h4>2020年 - 新型コロナウイルスの影響</h4>
        <p>新型コロナウイルスの流行により、自粛期間に入り、日常生活が一変しました。この期間、ずっと自宅で過ごし、プログラミングに興味を持ち始めました。</p>
        
        <h4>2021年 - 水泳人生の幕閉じ</h4>
        <p>自粛期間の影響によるモチベーションの低下や新たな挑戦や興味により、約15年の間、一生懸命努力してきた水泳の幕を閉じました。</p>

        <h4>2022年 - 高校生活と新たな挑戦</h4>
        <p><a href="#N/S">N/S高等学校に転校</a>し、学びのスタイルを変えました。プログラミングへの情熱が日に日に増していきます。</p>
        
        <h4>現在</h4>
        <p>音楽制作やプログラミングのスキルを磨き、将来に向けてさらに学びを深めています。過去の経験から学んだことを生かし、挑戦を続けています。</p>
    `;

    blogContent.innerHTML = timelineContent;
});

document.addEventListener("scroll", function() {
    var line = document.getElementById("timeline-line");
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var timelineHeight = scrollPercentage * document.querySelector(".timeline-container").offsetHeight;

    line.style.height = timelineHeight + "px";
});

document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0; // 最後のスクロール位置を保持する変数
    const header = document.querySelector('.site-header'); // ヘッダー要素を取得

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // ページの最上部にいる場合、ヘッダーを表示する
        if (currentScroll <= 0) {
            header.style.top = '0';
        }
        else if (currentScroll > lastScrollTop) {
            // 下にスクロールした場合、ヘッダーを隠す
            header.style.top = `-${header.offsetHeight}px`; // ヘッダーの高さ分上に移動させる
        } else {
            // 上にスクロールした場合、またはページの最上部にいる場合、ヘッダーを表示
            header.style.top = '0';
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 現在のスクロール位置を最後のスクロール位置として記録
    });
});

