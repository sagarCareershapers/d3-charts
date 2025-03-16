import ReactFlowComponent from "./components/ReactFlowComponent";
import TreeChart from "./components/TreeChart";


export default function Home() {

  const data = {
    name: "AWS Instances",
    children: [
      {
        name: "Instance i-06e1e6a037d6c29a1",
        children: [
          {
            name: "VPC: vpc-0bdddc15bb69344f05",
            children: [
              {
                name: "Security Groups",
                children: [
                  { name: "Group ID: sg-093a5be5be5b919bb9f3" },
                  { name: "Group Name: launch-wizard-1" }
                ]
              },
              {
                name: "IAM Roles",
                children: [
                  {
                    name: "Role: role-abc",
                    children: [
                      {
                        name: "Policy: abc",
                        children: [
                          {
                            name: "Policy ARN: arn:aws:iam::028659955548:policy/abc"
                          },
                          {
                            name: "Policy Document",
                            children: [
                              { name: "Version: 2021-10-17" },
                              {
                                name: "Statement",
                                children: [
                                  { name: "Effect: Allow" },
                                  { name: "Action: s3:*" },
                                  { name: "Resource: *" }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  

  return (
    <div>
      {/*<TreeChart data={data} />*/}
      <ReactFlowComponent />
    </div>
  );
}
