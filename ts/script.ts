const profilePicture: string =
  'https://static-cdn.jtvnw.net/jtv_user_pictures/38b409fa-6e9b-4407-adf1-0112e6c26da9-profile_image-600x600.png';

const LIGHT_MODE_IMAGE = profilePicture;
const DARK_MODE_IMAGE = profilePicture;

function toggleMode(): void {
  // Seleciona o elemento HTML raiz.
  const html: HTMLElement | null = document.documentElement;

  if (!html) {
    console.error('Elemento HTML não encontrado.');
    return;
  }

  // Alterna a classe 'light' no elemento HTML raiz, mudando o modo.
  html.classList.toggle('light');

  // Seleciona o elemento com o id "profile".
  const profileElement: HTMLElement | null = document.getElementById('profile');

  if (!profileElement) {
    console.error('Elemento com id "profile" não encontrado.');
    return;
  }

  // Seleciona a imagem dentro do elemento com o id "profile".
  const img: HTMLImageElement | null = profileElement.querySelector('img');

  if (!img) {
    console.error('Imagem não encontrada dentro do elemento com id "profile".');
    return;
  }

  // Verifica se o modo "light" está ativado e define a imagem correspondente.
  if (html.classList.contains('light')) {
    img.setAttribute('src', LIGHT_MODE_IMAGE);
  } else {
    img.setAttribute('src', DARK_MODE_IMAGE);
  }
}
