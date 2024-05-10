export default function Card({
  title,
  body,
  footer,
}: {
  title: React.ReactElement;
  body: React.ReactElement;
  footer: React.ReactElement;
}) {
  return (
    <>
      <div  className="card w-96 bg-base-100 shadow-xl m-auto">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div>{body}</div>
          <div className="card-actions justify-end">
            {footer}
          </div>
        </div>
      </div>

    </>
  );
}
