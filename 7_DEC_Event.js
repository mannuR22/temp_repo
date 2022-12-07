let sampleEvents = [{
    eventTypeId: "9959d791-2f27-4d32-8a19-8a9760b8074a",
    eventName: "ASSESSMENT_STARTED"
  },
  {
    eventTypeId: "c1c8ba34-5691-4038-88f1-509821bb6dc6",
    eventName: "PHONE_NUMBER_ENTERED"
  },
  {
    eventTypeId: "ca875f15-77c7-4833-9ce1-62783c2a88e8",
    eventName: "USER_REGISTERED"
  },
  {
    eventTypeId: "deb8a470-12ba-4971-b646-b81ee4143e86",
    eventName: "ITEM_DISPLAYED"
  },
  {
    eventTypeId: "709878b5-d2f8-4f92-b5a8-d7dae2789557",
    eventName: "ASSESSMENT_COMPLETE"
  },
  {
    eventTypeId: "8f419c49-dfc2-4565-86b6-acb6df098de0",
    eventName: "SNAPSHOT_REPORT_OPENED"
  },
  {
    eventTypeId: "080ae04e-8499-428c-9dbe-7708c3bc2321",
    eventName: "PAYMENT_WINDOW_OPENED"
  },
  {
    eventTypeId: "25186d83-36dc-4e2c-914d-9f43a3eb1ef4",
    eventName: "PAYMENT_MADE"
  },
  {
    eventTypeId: "b9a92ccd-96f7-4143-b70c-2128c091644d",
    eventName: "APPOINTMENT_BOOKED"
  }]

 db.Events.createIndex({ eventTypeId: 1 }, { unique: true });
 db.Events.insertMany(sampleEvents);