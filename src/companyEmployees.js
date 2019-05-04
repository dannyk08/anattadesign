export default {
  employees: [
    {
      id: 0,
      employees: [
        {
          id: 1,
          employees: [
            {
              id: 11,
              employees: [
                {
                  id: 111,
                  employees: [
                    { id: 1111, employees: [{ id: 11111, employees: [] }] }
                  ]
                }
              ]
            },
            { id: 12, employees: [] },
            {
              id: 13,
              employees: [
                { id: 131, employees: [{ id: 1311, employees: [] }] },
                { id: 132, employees: [] }
              ]
            },
            {
              id: 14,
              employees: [
                { id: 141, employees: [] },
                { id: 142, employees: [] }
              ]
            },
            { id: 15, employees: [] },
            { id: 16, employees: [] }
          ]
        },
        { id: 2, employees: [] },
        {
          id: 3,
          employees: [
            { id: 31, employees: [] },
            { id: 32, employees: [{ id: 321, employees: [] }] },
            { id: 33, employees: [] }
          ]
        }
      ]
    }
  ]
};
