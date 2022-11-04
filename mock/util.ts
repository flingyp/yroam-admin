export const successData = (data: any) => ({
  code: 200,
  data,
  message: '操作成功',
});

export const failData = (message: string) => ({
  code: 500,
  data: null,
  message: message || '操作失败',
});
