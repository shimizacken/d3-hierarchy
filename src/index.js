var flatData = [
    {
      "assistant": false, 
      "border_color": null, 
      "color": null, 
      "first_name": "Moshe", 
      "hierarchical_relationship_id": "5ac9b09e71aa6200097b4223", 
      "hierarchical_relationship_type": "REAL_MEMBER", 
      "image_url": null, 
      "last_name": "Levinski", 
      "manager_hierarchical_relationship_id": null, 
      "member_id": "5ac7dfe2de81d100099b9165", 
      "org_chart_version": 0, 
      "organization_id": "5abeae0ec6d82100086e63e2", 
      "title": "39"
    }, 
    {
      "assistant": false, 
      "border_color": null, 
      "color": null, 
      "first_name": "Stella", 
      "hierarchical_relationship_id": "5ac9e2fc2f580d0009ff6d13", 
      "hierarchical_relationship_type": "REAL_MEMBER", 
      "image_url": "null", 
      "last_name": "Marix", 
      "manager_hierarchical_relationship_id": "5ac9b09e71aa6200097b4223", 
      "member_id": "5ac7c08ede81d100099b914d", 
      "org_chart_version": 0, 
      "organization_id": "5abeae0ec6d82100086e63e2", 
      "title": "sdfdsf"
    }, 
    {
      "assistant": false, 
      "border_color": null, 
      "color": null, 
      "first_name": "Shimi", 
      "hierarchical_relationship_id": "5ac9b0ba71aa6200097b4224", 
      "hierarchical_relationship_type": "REAL_MEMBER", 
      "image_url": null, 
      "last_name": "Zacken", 
      "manager_hierarchical_relationship_id": "5ac9b09e71aa6200097b4223", 
      "member_id": "5abeae0fc6d82100086e63e3", 
      "org_chart_version": 0, 
      "organization_id": "5abeae0ec6d82100086e63e2", 
      "title": "CEO"
    }, 
    {
      "assistant": false, 
      "border_color": null, 
      "color": null, 
      "first_name": "Uri", 
      "hierarchical_relationship_id": "5ac9b0aa71aa62000a05206d", 
      "hierarchical_relationship_type": "REAL_MEMBER", 
      "image_url": null, 
      "last_name": "Kozdov", 
      "manager_hierarchical_relationship_id": "5ac9b09e71aa6200097b4223", 
      "member_id": "5ac7c04ede81d100099b914b", 
      "org_chart_version": 0, 
      "organization_id": "5abeae0ec6d82100086e63e2", 
      "title": "Programmer"
    }, 
    {
      "assistant": false, 
      "border_color": null, 
      "color": null, 
      "first_name": "cvbcv", 
      "hierarchical_relationship_id": "5ac9e3032f580d000a2308ba", 
      "hierarchical_relationship_type": "REAL_MEMBER", 
      "image_url": null, 
      "last_name": "bcvb", 
      "manager_hierarchical_relationship_id": "5ac9e2fc2f580d0009ff6d13", 
      "member_id": "5ac7c116de81d100099b9152", 
      "org_chart_version": 0, 
      "organization_id": "5abeae0ec6d82100086e63e2", 
      "title": "cvbcvbcvbcvb"
    }
  ];

var treeData = d3.stratify()
      .id(function(d) { return d.hierarchical_relationship_id; })
      .parentId(function(d) { return d.manager_hierarchical_relationship_id; })
      (flatData);

var treemap = d3.tree().size(600, 700);

var root = d3.hierarchy(treeData, function(d) {
    
    return d.childern;
});


// Compute the new tree layout.
  var nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);

console.log(links);

var margin = {top: 20, right: 90, bottom: 30, left: 90},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select('body').append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom);

    svg.append('g')
    .attr('transform', 'translate('
          + margin.left + ',' + margin.top + ')');


var treemap = d3.tree().size([height, width]);

// Assigns parent, children, height, depth
root = d3.hierarchy(treeData, function(d) { 
    return d.children;
});

root.x0 = height / 2;
root.y0 = 0;

// Assigns the x and y position for the nodes
var treeData = treemap(root);

// Compute the new tree layout.
var nodes = treeData.descendants(),
    links = treeData.descendants().slice(1);


var node = svg.selectAll('path.link')
    .data(nodes, function(d) { 

        return d.id;
    })
    .enter()
    .append('g')
    .attr('class', 'node')
    .attr('transform', function (d, i) {
        
        return 'translate(' + d.x + ',' + d.y + ')';
    });

    node.append('rect')
        .attr('width', 50)
        .attr('height', 30)
        .attr('fill', 'red');