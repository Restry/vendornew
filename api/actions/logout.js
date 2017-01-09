export default function logout(req, par, app, res) {
  return new Promise((resolve) => {
    req.session = null;
    req.cookie = null;
    res.setHeader('Set-Cookie', [`user=; Path=/; HttpOnly`]);

    return resolve({ success: true });
  });
}
