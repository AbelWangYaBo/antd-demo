const sigin = ({ userCode, password }: {
  userCode: string;
  password: string
}) => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ userCode, password })
    }, 800)
  })
}

export {
  sigin
}