"use client";
const LatestActivity = ({ activities }) => {
  const renderActivity = (activity) => {
    switch (activity.action) {
      case "moved task":
        return (
          <>
            <span className="fw-semibold">{activity.user}</span>{" "}
            moved task{" "}
            <span className="text-danger fw-semibold">
              "{activity.task}"
            </span>{" "}
            from{" "}
            <span className="fw-semibold">{activity.from}</span>{" "}
            to{" "}
            <span className="fw-semibold">{activity.to}</span>
          </>
        );

      case "added":
        return (
          <>
            <span className="fw-semibold">{activity.user}</span>{" "}
            added new{" "}
            <span className="fw-semibold">4 attached files</span>{" "}
            on task{" "}
            <span className="text-primary fw-semibold">
              "{activity.task}"
            </span>
          </>
        );

      case "completed":
        return (
          <>
            <span className="fw-semibold">{activity.user}</span>{" "}
            completed task{" "}
            <span className="text-primary fw-semibold">
              "{activity.task}"
            </span>
          </>
        );

      case "created":
        return (
          <>
            <span className="fw-semibold">{activity.user}</span>{" "}
            created new{" "}
            <span className="text-danger fw-semibold">
              {activity.task}
            </span>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {activities.map((activity, index) => (
        <div
          key={activity.id}
          className="d-flex gap-3 position-relative pb-4 latestactivity"
        >

          <div className="timeline d-flex flex-column align-items-center">
            <div className="timeline-circle"></div>

            {index !== activities.length - 1 && (
              <div className="timeline-line"></div>
            )}
          </div>
          <div>
            <p className="mb-1 small text-secondary">
              {renderActivity(activity)}
            </p>

            <small className="text-gray-400">
              {activity.date}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestActivity;