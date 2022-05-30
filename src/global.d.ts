interface Graphic {
  label: string,
  url: string,
  height: string,
  img: string
}

interface State {
  name: string,
  role: string,
  email: string,
  phone: string,
  graphic: number
}

interface FieldData {
  key: string,
  value: string
}

interface FieldElement extends EventTarget {
  name: string,
  value: string
}

interface UpdateEvent extends Event {
  target: FieldElement
}
