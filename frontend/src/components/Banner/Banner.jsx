export default function Banner({ title }) {
  return (
    <div className="bg-purple-red">
      <span className="text-light fs-5 fw-bold text-capitalize">{title}</span>
      <div className="page-description text-light">
        Add new {title} or edit existing ones to ensure you keep the flow of
        continuous improvement and excellence. Utilize a user-friendly interface
        to manage and analyze individual and collective {title} data,
        contributing to overall success and growth of our Studdents!
      </div>
    </div>
  );
}
