$(window).on("load", function() {
	$.getJSON("assets/data/data.json", function(data){
		// console.log(data.portfolio)

		// Append Intro
		$('.intro').append(data.name)
		$('.intro-job').append(data.job)
		$('.intro-social').append(`
			<a class="text-decoration-none" href="${data.social.linkedin}" target="_blank">
				<span class="mx-1">
					<i class="fab fa-linkedin" style="font-size: 24px; color: #0284B3;"></i>
				</span>
			</a>
			<a class="text-decoration-none" href="${data.social.twitter}" target="_blank">
				<span class="mx-1">
					<i class="fab fa-twitter" style="font-size: 24px; color: #0284B3;"></i>
				</span>
			</a>
			<a class="text-decoration-none" href="${data.social.instagram}" target="_blank">
				<span class="mx-1">
					<i class="fab fa-instagram" style="font-size: 24px; color: #0284B3;"></i>
				</span>
			</a>
			<a class="text-decoration-none" href="${data.social.github}" target="_blank">
				<span class="mx-1">
					<i class="fab fa-github" style="font-size: 24px; color: #0284B3;"></i>
				</span>
			</a>
			<br>
			<a href="#contact" class="btn btn-primary mt-2" data-aos="fade-right" data-aos-duration="1000">Contact</a>
		`)
		$('.intro-photo').append(`
			<img class="img-fluid" src="./assets/img/${data.about.img}" alt="Muhammad Fajar Maqidi" data-aos="fade-left" data-aos-duration="1000">
		`)
		// End Append Intro
		
		// Append About
		$('.about-me').append(data.about.me)
		$('.about-me-sm').append(data.about.me)
		// End About
		// 
		// Append Skills
		$('.skill-uiux').append(data.skills.uiux)
		$('.skill-programming').append(data.skills.programming.join(', '))
		// End Skills

		// Append Portfolio
		$.each( data.portfolio, function( key, val ) {
			$('.portfolio').append(`
				<div class="col-md-6">
					<figure class="figure-portfolio">
						<img src="./assets/img/${val.img.thumb}" alt="${val.name}" class="rounded img-fluid" data-src="./assets/img/${val.img.ori}">
						<figcaption>
							<a class="title fw-bold text-decoration-none" href="${val.url}" target="_blank">
								${val.name}
							</a>
							<small class="py-1 d-md-none">${val.description}</small>
						</figcaption>
						<div class="overlay"></div>
					</figure>

					<div class="d-none d-md-block">
						<h4 class="fw-bold">${val.name}</h4>
						<p class="fs-5">${val.description}</p>
					</div>
				</div>
			`)
		})

		// Lazyload Script
		function callback(entries) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const imgElement = entry.target.querySelector('img')
					const realSrc = imgElement.dataset.src;
					imgElement.style.filter = 'blur(0px)'
					imgElement.setAttribute('src', realSrc)
				}
			})
		}

		const options = {
			threshold: 0.1
		}

		let observer = new IntersectionObserver(callback, options)

		let elements = document.querySelectorAll('.figure-portfolio')
		
		elements.forEach(target => {
			observer.observe(target)
		})
		// End Append Portfolio
		
		// Append Footer
		$('.footer-social').append(`
			<a class="text-decoration-none" href="${data.social.linkedin}" target="_blank">
				<span class="mx-1">
					<i class="fab fa-linkedin" style="font-size: 24px; color: #0284B3;"></i>
				</span>
			</a>
			<a class="text-decoration-none" href="${data.social.twitter}" target="_blank">
				<span class="mx-1">
					<i class="fab fa-twitter" style="font-size: 24px; color: #0284B3;"></i>
				</span>
			</a>
			<a class="text-decoration-none" href="${data.social.instagram}" target="_blank">
				<span class="mx-1">
					<i class="fab fa-instagram" style="font-size: 24px; color: #0284B3;"></i>
				</span>
			</a>
			<a class="text-decoration-none" href="${data.social.github}" target="_blank">
				<span class="mx-1">
					<i class="fab fa-github" style="font-size: 24px; color: #0284B3;"></i>
				</span>
			</a>
		`)
		// End Append Footer
	})
})