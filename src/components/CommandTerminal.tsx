import "./CommandTerminal.css"


function CommandTerminal() {
  return (
    <section className="panel command">
      <h2>COMMAND TERMINAL</h2>

      <input placeholder="Enter command..." />

      <button>
        SEND
      </button>
    </section>
  );
}

export default CommandTerminal;