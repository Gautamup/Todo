export function CreateTodo() {
  return (
    <div>
      <input id="title"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Title"
      />
      <br />
      <input id="description"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Description"
      />
      <br />

      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          fetch("http://localhost:3000/todos",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: title,
              description: description
            }),
          }).then(async function (res) {
            const json = await res.json();
          });
        }}
      >
        Add todo
      </button>
    </div>
  );
}
