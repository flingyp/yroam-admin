export const successData = (data: any) => {
  return {
    code: 200,
    data,
    message: '操作成功'
  }
}

export const failData = (message: string) => {
  return {
    code: 500,
    data: null,
    message: message || '操作失败'
  }
}
