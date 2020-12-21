function userReset(state) {
  const resetMsg = () => {
    state.form.name = "";
    state.form.password = "";
  }
  return { resetMsg }
}
export {userReset}