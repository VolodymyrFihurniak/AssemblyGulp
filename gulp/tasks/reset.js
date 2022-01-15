import del from 'del';

export default function reset() {
  // eslint-disable-next-line no-undef
  return del(app.path.clean);
}
