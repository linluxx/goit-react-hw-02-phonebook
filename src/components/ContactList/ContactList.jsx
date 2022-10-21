export const ContactList = ({ filtered, onDeleteContact }) => {
  return (
    <ul>
      {filtered.map(({ id, name, number }) => (
        <li key={id}>
          {name}
          <span> {number}</span>
          <button
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
