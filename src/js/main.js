import '../styles/main.scss'

// Video Modal
const videoModal = document.getElementById('videoModal');
const videoIframe = document.getElementById('videoIframe');
const caseStudyBtn = document.querySelector('.case-study-btn');
const modalOverlay = document.querySelector('.video-modal__overlay');
const modalClose = document.querySelector('.video-modal__close');

function openVideoModal(videoId) {
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  videoIframe.src = videoUrl;
  videoModal.classList.add('is-active');
  videoModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeVideoModal() {
  videoIframe.src = '';
  videoModal.classList.remove('is-active');
  videoModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

// Open modal on button click
if (caseStudyBtn) {
  caseStudyBtn.addEventListener('click', () => {
    const videoId = caseStudyBtn.getAttribute('data-video-id');
    openVideoModal(videoId);
  });
}

// Close on overlay click
if (modalOverlay) {
  modalOverlay.addEventListener('click', closeVideoModal);
}

// Close on close button click
if (modalClose) {
  modalClose.addEventListener('click', closeVideoModal);
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && videoModal.classList.contains('is-active')) {
    closeVideoModal();
  }
});