const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const timerEl = document.querySelector('span')

const createTimerAnimator = () => {
	return seconds => {
		const interval = setInterval(() => {
			seconds--

			printTime(seconds)

			if (seconds === 0) {
				clearInterval(interval)
			}
		}, 1000)
	}
}

function printTime(seconds) {
	const hours = Math.floor(seconds / 3600)

	const minutes = Math.floor((seconds - hours * 3600) / 60)

	const newSeconds = seconds % 60

	timerEl.innerHTML = `
  ${hours.toString().padStart(2, '0')}:
  ${minutes.toString().padStart(2, '0')}:
  ${newSeconds.toString().padStart(2, '0')}
  `
}

const animateTimer = createTimerAnimator()

inputEl.addEventListener('input', e => {
	const str = e.target.value

	e.target.value = str.replace(/\D/g, '')
})

buttonEl.addEventListener('click', e => {
	if (inputEl.value == '') return

	const seconds = Number(inputEl.value)

	animateTimer(seconds)

	inputEl.value = ''
	inputEl.setAttribute('disabled', true)
	e.target.setAttribute('disabled', true)
})
