const validate = (res: Response): Response => {
  if (!res.ok) {
    throw new Error('res not ok')
  }

  return res
}

export const apiFetch = async <T>(url: string): Promise<T> => {
  return fetch(url)
    .then(validate)
    .then((res) => res.json()) as T
}
