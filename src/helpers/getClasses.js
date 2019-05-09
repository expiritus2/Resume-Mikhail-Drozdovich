
function getClasses(...names) {
  return names.filter(v => v).map(name => (this[name])).join(' ');
}

export const extend = target => (target.get = getClasses);

export default extend;
