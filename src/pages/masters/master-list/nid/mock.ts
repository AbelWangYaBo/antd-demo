const mockAxios = async (data: {
  data?: unknown,
  code: number,
  message: 'success' | string
}, type = 'success'): Promise<{
  data?: unknown,
  code: number,
  message: 'success' | string
}> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (type !== 'success') {
        rej(data)
      } else {
        res(data)
      }
    }, 800)
  })
}
export type INid = {
  code: string;
  name: string
}
const NID_LIST: INid[] = [
  ['C13', 'APPLIED - CHEMICAL INDUSTRY'],
  ['C15', 'APPLIED - DIAGNOSTICS'],
  ['C18', 'APPLIED - INDUSTRY/GENERAL'],
  ['C20', 'APPLIED - SERVICE/TESTING'],
  ['C11', 'AUTHORIZED DEALERS'],
  ['C17', 'HOSPITALS/PHYSICIANS'],
  ['C12', 'RESEARCH - BIOTECHNOLOGY'],
  ['C14', 'RESEARCH - DEALERS/RESELLERS'],
  ['C16', 'RESEARCH - GOVERNMENT/NONPROFIT'],
  ['C19', 'RESEARCH - PHARMACEUTICAL'],
  ['C21', 'RESEARCH - UNIVERSITY/SCHOOL'],
].map(d => {
  return {
    code: d[0],
    name: d[1]
  }
})

// get nid list
export const getList = () => {
  return mockAxios({
    data: NID_LIST,
    code: 200,
    message: 'success'
  })
}

// get nid by code
export const getData = (code: string) => {
  const detail = NID_LIST.find(d => d.code === code);
  if (!detail) {
    return mockAxios({
      code: 404,
      message: 'Not Found, NID not exists.'
    }, 'error')
  }
  return mockAxios({
    data: detail,
    code: 200,
    message: 'success'
  })
}

// add nid
export const addData = (data: INid) => {
  if (!data.code) {
    return mockAxios({
      code: 400,
      message: 'NID must be input.'
    }, 'error')
  }
  if (NID_LIST.find(nid => nid.code === data.code)) {
    return mockAxios({
      code: 400,
      message: 'NID already exists.'
    }, 'error')
  }
  NID_LIST.push(data)
  return mockAxios({
    code: 200,
    message: 'success'
  })
}

// update nid
export const putData = (data: INid) => {
  if (!data.code) {
    return mockAxios({
      code: 400,
      message: 'NID must be input.'
    }, 'error')
  }
  const index = NID_LIST.findIndex(nid => nid.code === data.code);
  if (index === -1) {
    return mockAxios({
      code: 404,
      message: 'Not Found, NID not exists.'
    }, 'error')
  }
  NID_LIST.splice(index, 1, data);
  return mockAxios({
    code: 200,
    message: 'success'
  })
}

// delete / remove nid
export const delData = (code: string) => {
  console.log('code', code)
  if (!code) {
    return mockAxios({
      code: 400,
      message: 'Unkown code'
    }, 'error')
  }
  const index = NID_LIST.findIndex(nid => nid.code === code);
  if (index === -1) {
    return mockAxios({
      code: 404,
      message: 'Not Found, NID not exists.'
    }, 'error')
  }
  NID_LIST.splice(index, 1);
  return mockAxios({
    code: 200,
    message: 'success'
  })
}